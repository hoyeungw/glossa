'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataScopes = require('@glossa/enum-data-scopes');
var enumFin = require('@glossa/enum-fin');
var enumGeneralFields = require('@glossa/enum-general-fields');
var enumDataTypes = require('@typen/enum-data-types');

const SchemaTable = {
  head: [enumGeneralFields.TYPE, enumDataScopes.RAW, enumDataScopes.LITE, enumDataScopes.DB, enumDataScopes.RATIO, enumGeneralFields.LABEL, enumFin.ENG, enumFin.CHS],
  rows: [[enumDataTypes.STR, 100, 100, 100, 100, null, 'date', '日期'], [enumDataTypes.STR, 100, 101, 101, 101, null, 'symbol', '股票代码'], [enumDataTypes.NUM, 100, 103, 103, 103, 'TOPEN', 'open', '开盘价'], [enumDataTypes.NUM, 100, 104, 104, 104, 'LOW', 'low', '最低价'], [enumDataTypes.NUM, 100, 105, 105, 105, 'HIGH', 'high', '最高价'], [enumDataTypes.NUM, 100, 106, 106, 106, 'TCLOSE', 'close', '收盘价'], [enumDataTypes.NUM, 100, NaN, NaN, NaN, 'LCLOSE', 'last close', '前收盘'], [enumDataTypes.NUM, 100, NaN, NaN, NaN, 'CHG', 'price change', '涨跌额'], [enumDataTypes.NUM, 100, NaN, NaN, NaN, 'PCHG', 'percent change', '涨跌幅'], [enumDataTypes.NUM, 100, NaN, NaN, NaN, 'TURNOVER', 'turnover', '换手率'], [enumDataTypes.NUM, 100, NaN, 107, 107, 'VOTURNOVER', 'volume turnover', '成交量'], [enumDataTypes.NUM, 100, 107, 108, 108, 'VATURNOVER', 'value turnover', '成交金额'], [enumDataTypes.NUM, 100, 108, 109, 109, 'TCAP', 'market cap', '总市值'], [enumDataTypes.NUM, 100, 109, 110, 110, 'MCAP', 'circulating cap', '流通市值']]
};

exports.SchemaTable = SchemaTable;
