import { AREA, CHS, CODE, DATE, EXCHANGE, NAME, SECTOR, WEIGHT } from '@glossa/enum-fin'
import { Table } from '@analys/table'
import { CrosTab } from '@analys/crostab'
import { COUNT, INCRE } from '@analys/enum-pivot-mode'
import { NUM_DESC } from '@aryth/comparer'
import { decoEntries, DecoEntries, decoSamples } from '@spare/logger'
import { VALUE_DESC } from '../utils/comparer'
import { tableAddRank } from '../utils/tableAddRank'
import { columnHisto } from '../utils/columnHisto'

/** @typedef {string|number} str */

export class FinInsight {

  static hs300Insight (table) {
    table = Table.from(table)
      .copy()
      .mutateColumn(WEIGHT, x => +x)
      .sort(WEIGHT, NUM_DESC)
    const sum = table.column(WEIGHT).reduce((a, b) => a + b).toFixed(2)
    const crostab = table
      .crosTab({
        side: EXCHANGE,
        banner: DATE,
        field: { weight: INCRE }
      })
      .map(x => x.toFixed(2))
    const byEx = crostab.rowwiseSamples(crostab.head, true, EXCHANGE)
    const top10 = table
      .boot({ rows: table.rows.slice(0, 10) })
      .mutateColumn(WEIGHT, x => x.toFixed(2))
      .toSamples([CODE, WEIGHT, CHS])
    return { sum, byEx, top10 }
  }

  static sectorInsight (table) {
    table = Table.from(table)
    const chips = table
      .chips({ key: SECTOR, field: CODE, mode: COUNT, objectify: false })
      .sort((a, b) => b[1] - a[1])
    const top10 = chips.slice(0, 10)
    const top20List = chips.slice(0, 20).map(([k]) => k)
    const codes = table.distinctOnColumn(CODE)
    return {
      count: {
        codes: codes.length,
        sectors: chips.length
      },
      top10: top10 |> DecoEntries({ discrete: true }),
      top20: top20List
    }
  }

  static tsInsight (table) {
    const
      REV = 'rev', PFT = 'pft', AST = 'ast', CURAST = 'curAst', FIXAST = 'fixAst',
      GPR = 'gpr', NPR = 'npr', PE = 'pe', PB = 'pb'

    table = Table.from(table)
    // dictionary
    const dictHead = [CODE, NAME, SECTOR, AREA]
    const codeToProfile = CrosTab.from({ side: table.column(CODE), head: dictHead, rows: table.select(dictHead).rows })
    // rank score
    const rankHead = [REV, PFT, GPR, AST, CURAST, FIXAST]
    tableAddRank(table, { fields: rankHead, label: 'score', sort: true, base: 150 })
    const topScore = table
      .lookupTable(CODE, 'score', false)
      .slice(0, 10)
      .map(([code, score]) => {
        const [, name, sector, area] = codeToProfile.row(code)
        return { code, name, sector, area, score }
      })
    // chips
    const areaChips = table
      .chips({ key: AREA, field: CODE, mode: COUNT, objectify: false })
      .sort(VALUE_DESC)

    const astHisto = columnHisto(table, { field: AST, maxTicks: 60, objectify: false })
    const revHisto = columnHisto(table, { field: REV, maxTicks: 60, objectify: false })
    const pftHisto = columnHisto(table, { field: PFT, maxTicks: 10, objectify: false })
    const gprHisto = columnHisto(table, { field: GPR, maxTicks: 5, objectify: false })
    const nprHisto = columnHisto(table, { field: NPR, maxTicks: 5, objectify: false })
    const pbHisto = columnHisto(table, { field: PB, maxTicks: 80, objectify: false })
    const peHisto = columnHisto(table, { field: PE, maxTicks: 10, objectify: false })

    // table |> DecoTable({ top: 40, bottom: 20, fullAngle: true }) |> says['ranked table']

    const DISCRETE = { discrete: true }
    return {
      count: table.ht,
      top10Areas: decoEntries(areaChips.slice(0, 10), DISCRETE),
      top10Scores: decoSamples(topScore, { discrete: true }),
      astHisto: decoEntries(astHisto.slice(1, 5), DISCRETE),
      revHisto: decoEntries(revHisto.slice(0, 5), DISCRETE),
      pftHisto: decoEntries(pftHisto.slice(0, 5), DISCRETE),
      gprHisto: decoEntries(gprHisto.slice(0, 5), DISCRETE),
      nprHisto: decoEntries(nprHisto, DISCRETE),
      pbHisto: decoEntries(pbHisto.slice(2, 7), DISCRETE),
      peHisto: decoEntries(peHisto.slice(1, 6), DISCRETE),
    }
  }
}
