'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumFin = require('@glossa/enum-fin');
var table = require('@analys/table');
var crostab = require('@analys/crostab');
var enumPivotMode = require('@analys/enum-pivot-mode');
var comparer = require('@aryth/comparer');
var logger = require('@spare/logger');
var tableMerge = require('@analys/table-merge');
var rankColumn = require('@aryth/rank-column');
var numStrict = require('@typen/num-strict');
var enumMutabilities = require('@analys/enum-mutabilities');
var math = require('@aryth/math');
var histo = require('@aryth/histo');

const VALUE_DESC = (a, b) => b[1] - a[1];

const tableAddRank = (table, {
  fields,
  label,
  base = 1,
  sort = false,
  mutate = true
}) => {
  let tableBeta = table.select(fields, enumMutabilities.IMMUTABLE);

  for (let f of fields) {
    tableBeta.mutateColumn(f, x => numStrict.isNumeric(x) ? +x : 0);
    rankColumn.mutaRank(tableBeta.rows, tableBeta.coin(f), comparer.NUM_ASC);
  }

  const column = tableBeta.rows.map(row => math.round(row.reduce((a, b) => a + b) / base));
  tableBeta.pushColumn(label, column);
  table = mutate ? tableMerge.tableAcquire(table, tableBeta.select([label])) : tableMerge.tableMerge(table, tableBeta.select([label]));
  if (sort) table.sort(label, comparer.NUM_DESC);
  return table;
};

const columnHisto = (table, {
  field,
  maxTicks,
  objectify
}) => {
  const column = table.column(field);
  const histo$1 = histo.Histo.fromSamples(column, maxTicks);
  return histo$1.statistics({
    objectify
  });
};

/** @typedef {string|number} str */

class FinInsight {
  static hs300Insight(table$1) {
    table$1 = table.Table.from(table$1).copy().mutateColumn(enumFin.WEIGHT, x => +x).sort(enumFin.WEIGHT, comparer.NUM_DESC);
    const sum = table$1.column(enumFin.WEIGHT).reduce((a, b) => a + b).toFixed(2);
    const crostab = table$1.crosTab({
      side: enumFin.EXCHANGE,
      banner: enumFin.DATE,
      field: {
        weight: enumPivotMode.INCRE
      }
    }).map(x => x.toFixed(2));
    const byEx = crostab.rowwiseSamples(crostab.head, true, enumFin.EXCHANGE);
    const top10 = table$1.boot({
      rows: table$1.rows.slice(0, 10)
    }).mutateColumn(enumFin.WEIGHT, x => x.toFixed(2)).toSamples([enumFin.CODE, enumFin.WEIGHT, enumFin.CHS]);
    return {
      sum,
      byEx,
      top10
    };
  }

  static sectorInsight(table$1) {
    var _top;

    table$1 = table.Table.from(table$1);
    const chips = table$1.chips({
      key: enumFin.SECTOR,
      field: enumFin.CODE,
      mode: enumPivotMode.COUNT,
      objectify: false
    }).sort((a, b) => b[1] - a[1]);
    const top10 = chips.slice(0, 10);
    const top20List = chips.slice(0, 20).map(([k]) => k);
    const codes = table$1.distinctOnColumn(enumFin.CODE);
    return {
      count: {
        codes: codes.length,
        sectors: chips.length
      },
      top10: (_top = top10, logger.DecoEntries({
        discrete: true
      })(_top)),
      top20: top20List
    };
  }

  static tsInsight(table$1) {
    const REV = 'rev',
          PFT = 'pft',
          AST = 'ast',
          CURAST = 'curAst',
          FIXAST = 'fixAst',
          GPR = 'gpr',
          NPR = 'npr',
          PE = 'pe',
          PB = 'pb';
    table$1 = table.Table.from(table$1); // dictionary

    const dictHead = [enumFin.CODE, enumFin.NAME, enumFin.SECTOR, enumFin.AREA];
    const codeToProfile = crostab.CrosTab.from({
      side: table$1.column(enumFin.CODE),
      head: dictHead,
      rows: table$1.select(dictHead).rows
    }); // rank score

    const rankHead = [REV, PFT, GPR, AST, CURAST, FIXAST];
    tableAddRank(table$1, {
      fields: rankHead,
      label: 'score',
      sort: true,
      base: 150
    });
    const topScore = table$1.lookupTable(enumFin.CODE, 'score', false).slice(0, 10).map(([code, score]) => {
      const [, name, sector, area] = codeToProfile.row(code);
      return {
        code,
        name,
        sector,
        area,
        score
      };
    }); // chips

    const areaChips = table$1.chips({
      key: enumFin.AREA,
      field: enumFin.CODE,
      mode: enumPivotMode.COUNT,
      objectify: false
    }).sort(VALUE_DESC);
    const astHisto = columnHisto(table$1, {
      field: AST,
      maxTicks: 60,
      objectify: false
    });
    const revHisto = columnHisto(table$1, {
      field: REV,
      maxTicks: 60,
      objectify: false
    });
    const pftHisto = columnHisto(table$1, {
      field: PFT,
      maxTicks: 10,
      objectify: false
    });
    const gprHisto = columnHisto(table$1, {
      field: GPR,
      maxTicks: 5,
      objectify: false
    });
    const nprHisto = columnHisto(table$1, {
      field: NPR,
      maxTicks: 5,
      objectify: false
    });
    const pbHisto = columnHisto(table$1, {
      field: PB,
      maxTicks: 80,
      objectify: false
    });
    const peHisto = columnHisto(table$1, {
      field: PE,
      maxTicks: 10,
      objectify: false
    }); // table |> DecoTable({ top: 40, bottom: 20, fullAngle: true }) |> says['ranked table']

    const DISCRETE = {
      discrete: true
    };
    return {
      count: table$1.ht,
      top10Areas: logger.decoEntries(areaChips.slice(0, 10), DISCRETE),
      top10Scores: logger.decoSamples(topScore, {
        discrete: true
      }),
      astHisto: logger.decoEntries(astHisto.slice(1, 5), DISCRETE),
      revHisto: logger.decoEntries(revHisto.slice(0, 5), DISCRETE),
      pftHisto: logger.decoEntries(pftHisto.slice(0, 5), DISCRETE),
      gprHisto: logger.decoEntries(gprHisto.slice(0, 5), DISCRETE),
      nprHisto: logger.decoEntries(nprHisto, DISCRETE),
      pbHisto: logger.decoEntries(pbHisto.slice(2, 7), DISCRETE),
      peHisto: logger.decoEntries(peHisto.slice(1, 6), DISCRETE)
    };
  }

}

exports.FinInsight = FinInsight;
