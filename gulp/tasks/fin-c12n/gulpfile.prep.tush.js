import gulp from 'gulp'
import { FinInsight } from '@glossa/fin-insight'
import { CODE } from '../../constants/fields'
import { Insight } from '../../functions/Insight'
import { AREA, EST } from '@glossa/enum-fin'
import { Table } from '@analys/table'
import { AssignTable } from '@flua/gulp-init'
import { Clean } from '@flua/clean'
import { TableChips, TableLookup } from '@flua/table-gulp'
import { VERSE_CONFIG } from '../../functions/readValue'
import { delogger } from '@spare/logger'

const BASE = 'packages/c12n/c12n-fin-tush'
const RAW = 'Sectors.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources'

const table = new Table()
const checkTable = async () => {
  await (table.lookupTable(CODE, EST) |> delogger)
}
export const buildTush = gulp.series(
  Clean(DEST),
  AssignTable({ target: table, src: SRC, filename: RAW }),
  Insight({ filename: RAW, table: table, insight: FinInsight.tsInsight }),
  checkTable,
  gulp.parallel(
    TableLookup({ table, key: CODE, field: AREA, dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: EST, dest: DEST, config: VERSE_CONFIG }),
    TableChips({ table, key: AREA, field: CODE, dest: DEST, config: VERSE_CONFIG }),
  )
)
