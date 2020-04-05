import gulp from 'gulp'
import { FinInsight } from '@glossa/fin-insight'
import { AREA, CODE, EST, SECTOR } from '@glossa/enum-fin'
import { Table } from '@analys/table'
import { AssignTable } from '@flua/gulp-init'
import { Clean } from '@flua/clean'
import { TableChips, TableLookup } from '@flua/table-gulp'
import { Insight } from '../../../functions/Insight'
import { OBJECTIFY } from '../../../functions/readValue'

const BASE = 'packages/c12n/c12n-fin-tush'
const RAW = 'Sectors.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources'

const table = new Table()

export const buildTush = gulp.series(
  Clean(DEST),
  AssignTable({ target: table, src: SRC, filename: RAW }),
  Insight({ filename: RAW, table: table, insight: FinInsight.tsInsight }),
  gulp.parallel(
    TableLookup({ table, key: CODE, field: AREA, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: EST, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: SECTOR, dest: DEST, config: OBJECTIFY.std }),
    TableChips({ table, key: AREA, field: CODE, dest: DEST, config: OBJECTIFY.std }),
  )
)
