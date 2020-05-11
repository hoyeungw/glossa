'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ratios = [[/^price(?: to)?(.*)ratio$/gi, (_, ph) => 'price ' + ph], [/(.*) turnover$/gi, (_, ph) => 'tn ' + ph], [/(.*) rat(e|io)s?$/gi, (_, ph) => 'r ' + ph], [/multipl(e|ier)/gi, 'mul'], [/capitalization/gi, 'cap'], [/(?<!o)per(?= )(?! share)/gi, ' to'], [/outstanding/gi, 'outs'], [/pretax (\w+)/gi, (_, ph) => ph + 'bt'], [/conversion/gi, 'conv'], [/enterprise/gi, 'ent'], [/effective/gi, 'eff'], [/return on/gi, 'ro'], [/per share/gi, 'ps'], [/earnings?/gi, 'e'], [/coverage/gi, 'cov'], [/employed/gi, 'emp'], [/days of/gi, 'days'], [/company/gi, ''], [/profit/gi, 'pf'], [/growth/gi, 'gr'], [/gross/gi, 'g'], [/price/gi, 'p'], [/book/gi, 'b']];

exports.ratios = ratios;
