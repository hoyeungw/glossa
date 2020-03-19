import gulp from 'gulp'
import { FinInsight } from '@glossa/fin-insight'
import { TableGulp } from '../functions/TableGulp'
import { CODE } from '../constants/fields'
import { Insight } from '../functions/Insight'
import { AREA } from '@glossa/enum-fin'

const BASE = 'packages/c12n/c12n-fin-tush'
const RAW = 'Sectors.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources'

const tableGulp = TableGulp.build({ src: SRC, dest: DEST })

export const buildAreas = gulp.series(
  tableGulp.CleanDest(),
  tableGulp.Read(RAW),
  Insight({ filename: RAW, table: tableGulp.table, insight: FinInsight.tsInsight }),
  gulp.parallel(
    tableGulp.TableLookup(CODE, AREA),
    tableGulp.TableChips(AREA, CODE),
  )
)
