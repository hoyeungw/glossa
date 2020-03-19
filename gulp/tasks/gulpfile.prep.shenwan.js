import gulp from 'gulp'
import { TableGulp } from '../functions/TableGulp'
import { CHS, CODE, SECTOR } from '../constants/fields'
import { Insight } from '../functions/Insight'
import { FinInsight } from '@glossa/fin-insight'

const BASE = 'packages/c12n/c12n-fin-shenwan'
const RAW = 'Sectors.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources/sectors'

const tableGulp = TableGulp.build({ src: SRC, dest: DEST })

export const buildShenwan = gulp.series(
  tableGulp.CleanDest(),
  tableGulp.Read(RAW),
  Insight({ filename: RAW, table: tableGulp.table, insight: FinInsight.sectorInsight }),
  gulp.parallel(
    tableGulp.TableLookup(CODE, CHS),
    tableGulp.TableChips(CODE, SECTOR),
    tableGulp.TableChips(SECTOR, CODE),
  )
)

