import gulp from 'gulp'
import { FinInsight } from '@glossa/fin-insight'
import { CHS, CODE, SECTOR } from '../../constants/fields'
import { Table } from '@analys/table'
import { Insight } from '../../functions/Insight'
import { AssignTable } from '@flua/gulp-init'
import { Clean } from '@flua/clean'
import { TableChips, TableLookup } from '@flua/table-gulp'
import { VERSE_CONFIG } from '../../functions/readValue'

const BASE = 'packages/c12n/c12n-fin-sina'
const RAW = 'Sectors.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources/sectors'

const table = new Table()

export const buildSina = gulp.series(
  Clean(DEST),
  AssignTable({ target: table, src: SRC, filename: RAW }),
  Insight({ filename: RAW, table: table, insight: FinInsight.sectorInsight }),
  gulp.parallel(
    TableLookup({ table, key: CODE, field: CHS, dest: DEST, config: VERSE_CONFIG }),
    TableChips({ table, key: CODE, field: SECTOR, dest: DEST, config: VERSE_CONFIG }),
    TableChips({ table, key: SECTOR, field: CODE, dest: DEST, config: VERSE_CONFIG }),
  )
)

