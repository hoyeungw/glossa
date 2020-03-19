import gulp from 'gulp'
import ora from 'ora'
import { says } from '@palett/says'
import { FinInsight } from '@glossa/fin-insight'
import { TableGulp } from '../functions/TableGulp'
import { CHS, CODE, ENG, WEIGHT } from '../constants/fields'
import { Insight } from '../functions/Insight'
import { AREA, CONCEPT, SECTOR } from '@glossa/enum-fin'
import { rename } from '../utils/rename'
import { greyNowTime } from '../utils/waitOra'
import { deco, xr } from '@spare/logger'

const BASE = 'packages/index/index-fin-hs300'
const RAW = 'IndexHS300.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources'

const tableGulp = TableGulp.build({ src: SRC, dest: DEST })

const TableConcat = (table) => {
  const [SHENWAN, SINA, TUSH] = [says.roster('shenwan'), says.roster('sina'), says.roster('tush')]
  const method = async () => {
    const spn = ora().start('loading ' + SHENWAN)
    const codes = table.column(CODE)
    await import('@glossa/c12n-fin-shenwan').then(
      ({ CodeToSectors }) => table.pushColumn(SECTOR, codes.map(x => CodeToSectors[x] ?? []))
    )
    spn.succeed(greyNowTime() + 'loaded ' + SHENWAN), spn.start('loading ' + SINA)
    await import('@glossa/c12n-fin-sina').then(
      ({ CodeToSectors, CodeToConcepts }) => {
        table.pushColumn(SECTOR + 'Sina', codes.map(x => CodeToSectors[x] ?? []))
        table.pushColumn(CONCEPT, codes.map(x => CodeToConcepts[x] ?? []))
      })
    spn.succeed(greyNowTime() + 'loaded ' + SINA), spn.start('loading ' + TUSH)
    await import('@glossa/c12n-fin-tush').then(
      ({ CodeToArea }) => table.pushColumn(AREA, codes.map(x => CodeToArea[x]))
    )
    spn.succeed(greyNowTime() + 'loaded ' + TUSH)
  }
  return rename(method, xr().p('merged').p([SHENWAN, SINA, TUSH] |> deco).p('to table'))
}

export const buildHs300 = gulp.series(
  tableGulp.CleanDest(),
  tableGulp.Read(RAW),
  TableConcat(tableGulp.table),
  Insight({ filename: RAW, table: tableGulp.table, insight: FinInsight.hs300Insight }),
  gulp.parallel(
    tableGulp.TableLookup(CODE, CHS),
    tableGulp.TableLookup(CODE, ENG),
    tableGulp.TableLookup(CODE, WEIGHT),
    tableGulp.TableLookup(CODE, SECTOR),
    tableGulp.TableLookup(CODE, SECTOR + 'Sina'),
    tableGulp.TableLookup(CODE, CONCEPT),
    tableGulp.TableLookup(CODE, AREA),
  )
)
