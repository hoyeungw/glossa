import gulp from 'gulp'
import { CHS, CODE, SECTOR } from '../../constants/fields'
import { Insight } from '../../functions/Insight'
import { FinInsight } from '@glossa/fin-insight'
import { AssignTable } from '@flua/gulp-init'
import { Clean } from '@flua/clean'
import { Table } from '@analys/table'
import { TableChips, TableLookup } from '@flua/table-gulp'
import { makeVerseConfig } from '../../functions/readValue'

const BASE = 'packages/c12n/c12n-fin-shenwan'
const RAW = 'Sectors.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources/sectors'

const table = new Table()

export const buildShenwan = gulp.series(
  Clean(DEST),
  AssignTable({ target: table, src: SRC, filename: RAW }),
  Insight({ filename: RAW, table: table, insight: FinInsight.sectorInsight }),
  gulp.series(
    TableLookup({ table, key: CODE, field: CHS, dest: DEST, config: makeVerseConfig() }),
    TableChips({ table, key: CODE, field: SECTOR, dest: DEST, config: makeVerseConfig() }),
    TableChips({ table, key: SECTOR, field: CODE, dest: DEST, config: makeVerseConfig() }),
  )
)

