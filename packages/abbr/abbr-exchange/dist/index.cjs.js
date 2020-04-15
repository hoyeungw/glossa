'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const exchanges = [[/open/gi, 'o'], [/high/gi, 'hi'], [/low/gi, 'lo'], [/close/gi, 'e'], [/volum([ne])/gi, 'vol'], [/average( ?)/gi, 'avg '], [/percent/gi, '%'], [/change/gi, 'ch'], [/price/gi, 'prc'], [/total/gi, ''], [/circulating /gi, 'cir'], [/capitalization/gi, 'cap'], [/turnover/gi, 'tnv'], [/in (\d*?) days/gi, (_, n) => `d(${n})`]];

exports.exchanges = exchanges;
