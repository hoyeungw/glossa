import { esvar }          from '@flua/utils'
import { Vinylize }       from '@flua/vinylize'
import { DictCollection } from '@glossa/abbr-fin'

import { RATIO }                             from '@glossa/enum-data-scopes'
import { BALANCES, CASHFLOWS, ENG, INCOMES } from '@glossa/enum-fin'
import { says }                        from '@palett/says'
import { decoTable, delogger, logger } from '@spare/logger'
import { snakeToCamel }                from '@spare/phrasing'
import { Verse }                             from '@spare/verse'
import { Rename }                            from '@vect/rename'
import gulp                                  from 'gulp'
import { ABBR }                              from '../../../../gulp/constants/abbr.fields'
import { TableCollection }                   from './TableCollection'

const DEST = 'packages/table/table-fin-fmp/resources'
const mem = {}
const LoadTable = (report) => {
  return (async () => {
    mem[report] = await TableCollection[report]
  }) |> Rename('load table ' + says.roster(report))
}

const EnglishToAbbrev = (report) => {
  return (async () => {
    /** @type {Table} */ const table = await mem[report]
    const dict = DictCollection[report]
    const abbreviations = table.column(ENG).map(x => x.replace(dict, snakeToCamel))
    table.insertColumn(ABBR, abbreviations, { field: RATIO, mutate: true })

  }) |> Rename('english to abbrev ' + says.roster(report))
}

const LogTable = (report) => {
  return (async () => {
    const table = await mem[report]
    table |> decoTable |> says[report]
    '' |> logger
  }) |> Rename('log table ' + says.roster(report))
}

const SaveTable = (report) => {
  return (async () => {
    const table = await mem[report]
    Vinylize(report + '.js')
      .p(esvar(report))
      .p(Verse.table(table))
      .pipe(gulp.dest(DEST))
  }) |> Rename('save table ' + says.roster(report))
}

export const buildTable = gulp.parallel(
  gulp.series(
    LoadTable(BALANCES),
    EnglishToAbbrev(BALANCES),
    LogTable(BALANCES),
    SaveTable(BALANCES),
  ),
  gulp.series(
    LoadTable(INCOMES),
    EnglishToAbbrev(INCOMES),
    LogTable(INCOMES),
    SaveTable(INCOMES),
  ),
  gulp.series(
    LoadTable(CASHFLOWS),
    EnglishToAbbrev(CASHFLOWS),
    LogTable(CASHFLOWS),
    SaveTable(CASHFLOWS),
  )
)
