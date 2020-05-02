import { Table }                                 from '@analys/table'
import { Histo }                                 from '@aryth/histo'
import { Clean }                                 from '@flua/clean'
import { esvar }                                 from '@flua/utils'
import { Vinylize }                              from '@flua/vinylize'
import { Abbr }                                  from '@glossa/abbr-fin'
import { BALANCES, BASICS, CASHFLOWS, INCOMES }  from '@glossa/enum-fin'
import { ChsToEng }                              from '@glossa/i18n-fin-ntes'
import { says }                                  from '@palett/says'
import { decoEntries, DecoTable }                from '@spare/logger'
import { snakeToCamel }                          from '@spare/phrasing'
import { MakeReplaceable }                       from '@spare/translator'
import { Verse }                                 from '@spare/verse'
import { STR, SYM }                              from '@typen/enum-data-types'
import { Rename }                                from '@vect/rename'
import gulp                                      from 'gulp'
import { ABBR, CHS, DB, ENG, FORMAT, LITE, RAW } from '../../constants/abbr.fields'

const BASE = 'packages/financial/fin-ntes'
const DEST = BASE + '/static/abbr'

const SYMBOL_CHS = '代码'
const mem = {}

const Translate = (report) => (async () => {
  const lexChToEn = ChsToEng[report] |> MakeReplaceable({ sort: true })
  const lexEnToAb = Abbr(report) |> MakeReplaceable({ sort: true })
  const rows = ReportSettings[report].map(([chs, lite, db, format], i) => {
    const en = chs.replace(lexChToEn, x => x.trim().toLowerCase())
    const ab = en.replace(lexEnToAb, x => x.trim().toLowerCase()|> snakeToCamel)
    db = (!isNaN(db) && (ab.length <= AbbrevLengthFilters[report])) ? ++i : NaN
    return [chs, ab, lite, db, format, en]
  })
  mem[report] = await Table
    .from({
      head: [CHS, ABBR, LITE, DB, FORMAT, ENG],
      rows,
      title: report
    })
    .unshiftRow([SYMBOL_CHS, SYM, 0, 0, STR, SYM])
}) |> Rename('load table ' + says.roster(report))

const TableDashboard = (report) => (async () => {   // await (mem |> deca({ hi: 2 }) |> logger)
  const t = mem[report]
  t |> DecoTable({ fullAngle: true })
    |> says[report].br(RAW)
  Histo.fromSamples(t.column(ABBR).map(x => x.length))
    .statistics({ objectify: false })
    .slice(1, -2)
    |> decoEntries
    |> says[report].br('word length histogram')
}) |> Rename('table dashboard ' + says.roster(report))

const SaveTable = (report) => (async () => {
  Vinylize(report + '.js')
    .p(esvar(report))
    .p(Verse.table(mem[report]))
    .pipe(gulp.dest(DEST))
}) |> Rename('table dashboard ' + says.roster(report))

export const buildAbbrTable = gulp.series(
  Clean(DEST),
  gulp.series(
    Translate(BALANCES),
    Translate(INCOMES),
    Translate(CASHFLOWS),
    Translate(BASICS),
  ),
  gulp.series(
    TableDashboard(BALANCES),
    TableDashboard(INCOMES),
    TableDashboard(CASHFLOWS),
    TableDashboard(BASICS),
  ),
  gulp.parallel(
    SaveTable(BALANCES),
    SaveTable(INCOMES),
    SaveTable(CASHFLOWS),
    SaveTable(BASICS),
  ),
)
