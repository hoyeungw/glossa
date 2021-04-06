'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var c12nFinShenwan = require('@glossa/c12n-fin-shenwan');
var c12nFinTush = require('@glossa/c12n-fin-tush');
var c12nFinSina = require('@glossa/c12n-fin-sina');
var indexFinHs300 = require('@glossa/index-fin-hs300');
var table = require('@analys/table');
var enumFin = require('@glossa/enum-fin');
var convert = require('@valjoux/convert');

const initC12ns = () => {
  const head = [enumFin.SYMBOL, enumFin.CHS, enumFin.EST, enumFin.SECTOR, enumFin.CONCEPTS, enumFin.AREA, enumFin.ENG];
  const rows = Object.entries(c12nFinShenwan.CodeToChs).map(([code, chs]) => {
    var _CodeToEst$code, _Date;

    return [code, chs, (_CodeToEst$code = c12nFinTush.CodeToEst[code]) !== null && _CodeToEst$code !== void 0 ? _CodeToEst$code : (_Date = new Date(c12nFinShenwan.CodeToEst[code]), convert.dateToDash(_Date)), c12nFinShenwan.CodeToSector[code], c12nFinSina.CodeToConcepts[code], c12nFinTush.CodeToArea[code], indexFinHs300.CodeToEng[code]];
  });
  return table.Table.from({
    head,
    rows
  });
};

exports.initC12ns = initC12ns;
