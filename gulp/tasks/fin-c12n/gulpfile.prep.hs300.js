import gulp from 'gulp'
import ora from 'ora'
import { says } from '@palett/says'
import { FinInsight } from '@glossa/fin-insight'
import { AREA, CONCEPT, SECTOR } from '@glossa/enum-fin'
import { deco, xr } from '@spare/logger'
import { Rename } from '@vect/rename'
import { AssignTable } from '@flua/gulp-init'
import { Clean } from '@flua/clean'
import { Table } from '@analys/table'
import { CHS, CODE, ENG, WEIGHT } from '../../constants/fields'
import { Insight } from '../../functions/Insight'
import { greyNowTime } from '../../utils/waitOra'
import { TableLookup } from '@flua/table-gulp'
import { VERSE_CONFIG } from '../../functions/readValue'

const BASE = 'packages/index/index-fin-hs300'
const RAW = 'IndexHS300.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources'

const table = new Table()

const TableConcat = (table) => {
  const [SHENWAN, SINA, TUSH] = [says.roster('shenwan'), says.roster('sina'), says.roster('tush')]
  return (async () => {
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
  }) |> Rename(xr().p('merged').p([SHENWAN, SINA, TUSH] |> deco).p('to table').toString())
}

export const buildHs300 = gulp.series(
  Clean(DEST),
  AssignTable({ target: table, src: SRC, filename: RAW }),
  TableConcat(table),
  Insight({ filename: RAW, table: table, insight: FinInsight.hs300Insight }),
  gulp.parallel(
    TableLookup({ table, key: CODE, field: CHS, dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: ENG, dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: WEIGHT, dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: SECTOR, dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: SECTOR + 'Sina', dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: CONCEPT, dest: DEST, config: VERSE_CONFIG }),
    TableLookup({ table, key: CODE, field: AREA, dest: DEST, config: VERSE_CONFIG }),
  )
)
