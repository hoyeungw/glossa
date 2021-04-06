import { WEIGHT, EXCHANGE, DATE, CODE, CHS, SECTOR, AREA, NAME } from '@glossa/enum-fin';
import { Table } from '@analys/table';
import { CrosTab } from '@analys/crostab';
import { INCRE, COUNT } from '@analys/enum-pivot-mode';
import { NUM_ASC, NUM_DESC } from '@aryth/comparer';
import { DecoEntries, decoEntries, decoSamples } from '@spare/logger';
import { tableAcquire, tableMerge } from '@analys/table-merge';
import { mutaRank } from '@aryth/rank-column';
import { isNumeric } from '@typen/num-strict';
import { IMMUTABLE } from '@analys/enum-mutabilities';
import { round } from '@aryth/math';
import { Histo } from '@aryth/histo';

const VALUE_DESC = (a, b) => b[1] - a[1];

const tableAddRank = (table, {
  fields,
  label,
  base = 1,
  sort = false,
  mutate = true
}) => {
  let tableBeta = table.select(fields, IMMUTABLE);

  for (let f of fields) {
    tableBeta.mutateColumn(f, x => isNumeric(x) ? +x : 0);
    mutaRank(tableBeta.rows, tableBeta.coin(f), NUM_ASC);
  }

  const column = tableBeta.rows.map(row => round(row.reduce((a, b) => a + b) / base));
  tableBeta.pushColumn(label, column);
  table = mutate ? tableAcquire(table, tableBeta.select([label])) : tableMerge(table, tableBeta.select([label]));
  if (sort) table.sort(label, NUM_DESC);
  return table;
};

const columnHisto = (table, {
  field,
  maxTicks,
  objectify
}) => {
  const column = table.column(field);
  const histo = Histo.fromSamples(column, maxTicks);
  return histo.statistics({
    objectify
  });
};

/** @typedef {string|number} str */

class FinInsight {
  static hs300Insight(table) {
    table = Table.from(table).copy().mutateColumn(WEIGHT, x => +x).sort(WEIGHT, NUM_DESC);
    const sum = table.column(WEIGHT).reduce((a, b) => a + b).toFixed(2);
    const crostab = table.crosTab({
      side: EXCHANGE,
      banner: DATE,
      field: {
        weight: INCRE
      }
    }).map(x => x.toFixed(2));
    const byEx = crostab.rowwiseSamples(crostab.head, true, EXCHANGE);
    const top10 = table.boot({
      rows: table.rows.slice(0, 10)
    }).mutateColumn(WEIGHT, x => x.toFixed(2)).toSamples([CODE, WEIGHT, CHS]);
    return {
      sum,
      byEx,
      top10
    };
  }

  static sectorInsight(table) {
    var _top;

    table = Table.from(table);
    const chips = table.chips({
      key: SECTOR,
      field: CODE,
      mode: COUNT,
      objectify: false
    }).sort((a, b) => b[1] - a[1]);
    const top10 = chips.slice(0, 10);
    const top20List = chips.slice(0, 20).map(([k]) => k);
    const codes = table.distinctOnColumn(CODE);
    return {
      count: {
        codes: codes.length,
        sectors: chips.length
      },
      top10: (_top = top10, DecoEntries({
        discrete: true
      })(_top)),
      top20: top20List
    };
  }

  static tsInsight(table) {
    const REV = 'rev',
          PFT = 'pft',
          AST = 'ast',
          CURAST = 'curAst',
          FIXAST = 'fixAst',
          GPR = 'gpr',
          NPR = 'npr',
          PE = 'pe',
          PB = 'pb';
    table = Table.from(table); // dictionary

    const dictHead = [CODE, NAME, SECTOR, AREA];
    const codeToProfile = CrosTab.from({
      side: table.column(CODE),
      head: dictHead,
      rows: table.select(dictHead).rows
    }); // rank score

    const rankHead = [REV, PFT, GPR, AST, CURAST, FIXAST];
    tableAddRank(table, {
      fields: rankHead,
      label: 'score',
      sort: true,
      base: 150
    });
    const topScore = table.lookupTable(CODE, 'score', false).slice(0, 10).map(([code, score]) => {
      const [, name, sector, area] = codeToProfile.row(code);
      return {
        code,
        name,
        sector,
        area,
        score
      };
    }); // chips

    const areaChips = table.chips({
      key: AREA,
      field: CODE,
      mode: COUNT,
      objectify: false
    }).sort(VALUE_DESC);
    const astHisto = columnHisto(table, {
      field: AST,
      maxTicks: 60,
      objectify: false
    });
    const revHisto = columnHisto(table, {
      field: REV,
      maxTicks: 60,
      objectify: false
    });
    const pftHisto = columnHisto(table, {
      field: PFT,
      maxTicks: 10,
      objectify: false
    });
    const gprHisto = columnHisto(table, {
      field: GPR,
      maxTicks: 5,
      objectify: false
    });
    const nprHisto = columnHisto(table, {
      field: NPR,
      maxTicks: 5,
      objectify: false
    });
    const pbHisto = columnHisto(table, {
      field: PB,
      maxTicks: 80,
      objectify: false
    });
    const peHisto = columnHisto(table, {
      field: PE,
      maxTicks: 10,
      objectify: false
    }); // table |> DecoTable({ top: 40, bottom: 20, fullAngle: true }) |> says['ranked table']

    const DISCRETE = {
      discrete: true
    };
    return {
      count: table.ht,
      top10Areas: decoEntries(areaChips.slice(0, 10), DISCRETE),
      top10Scores: decoSamples(topScore, {
        discrete: true
      }),
      astHisto: decoEntries(astHisto.slice(1, 5), DISCRETE),
      revHisto: decoEntries(revHisto.slice(0, 5), DISCRETE),
      pftHisto: decoEntries(pftHisto.slice(0, 5), DISCRETE),
      gprHisto: decoEntries(gprHisto.slice(0, 5), DISCRETE),
      nprHisto: decoEntries(nprHisto, DISCRETE),
      pbHisto: decoEntries(pbHisto.slice(2, 7), DISCRETE),
      peHisto: decoEntries(peHisto.slice(1, 6), DISCRETE)
    };
  }

}

export { FinInsight };
