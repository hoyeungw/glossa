'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataScopes = require('@glossa/enum-data-scopes');
var enumFin = require('@glossa/enum-fin');
var enumGeneralFields = require('@glossa/enum-general-fields');
var enumDataTypes = require('@typen/enum-data-types');

const exchange = {
  head: [enumGeneralFields.TYPE, enumDataScopes.RAW, enumDataScopes.LITE, enumDataScopes.DB, enumDataScopes.RATIO, enumFin.CHS, enumFin.ENG],
  rows: [[enumDataTypes.STR, 100, 100, 100, 100, '日期', 'date'], [enumDataTypes.STR, 100, 100, 100, 100, '代码', 'symbol'], [enumDataTypes.NUM, 101, 101, 101, 101, '开盘价', 'open'], [enumDataTypes.NUM, 102, 102, 102, 102, '最高价', 'high'], [enumDataTypes.NUM, 104, 104, 104, 104, '收盘价', 'close'], [enumDataTypes.NUM, 103, 103, 103, 103, '最低价', 'low'], [enumDataTypes.NUM, 105, 105, 105, 105, '成交量', 'volume'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '价格变动', 'price change'], [enumDataTypes.NUM, 200, 106, NaN, NaN, '涨跌幅', 'percent change'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '5日均价', 'average price in 5 days'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '10日均价', 'average price in 10 days'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '20日均价', 'average price in 20 days'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '5日均量', 'average volume in 5 days'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '10日均量', 'average volume in 10 days'], [enumDataTypes.NUM, 200, NaN, NaN, NaN, '20日均量', 'average volume in 20 days']]
};

exports.exchange = exchange;
