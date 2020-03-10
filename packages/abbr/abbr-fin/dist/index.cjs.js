'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const balances = [[/account(s?)/gi, 'acc'], [/monetary/gi, 'monet'], [/development/gi, 'dev'], [/shareholders('?) equity/gi, 'eqt'], [/property, plant (&|and) equipment/gi, 'ppe']];

const incomes = [[/diluted/gi, 'dil'], [/margin/gi, 'mrg'], [/earnings before/gi, 'eb'], [/earnings per share/gi, 'eps']];

const cashflows = [[/depreciation/gi, 'deprec'], [/cash flow/gi, 'cf'], [/subtotal of cash inflow from/gi, 'cin'], [/subtotal of cash outflow from/gi, 'cout'], [/increase (in|of)/gi, 'incr'], [/decrease (in|of)/gi, 'decr'], [/equivalents/gi, 'eqv'], [/amortization/gi, 'amort'], [/activities/gi, '']];

const basics = [[/basic/gi, ''], [/cash flow/gi, 'c flow'], [/equity/gi, 'eqt'], [/activities/gi, ''], [/return on/gi, 'ro'], [/return on equity/gi, 'roe']];

const enterpriseValues = [[/market /gi, 'mkt'], [/capitalization/gi, 'cap'], [/stock price/gi, 'prc'], [/number of /gi, '#'], [/value/gi, 'val'], [/enterprise/gi, 'ent']];

const generals = [[/ {2}/g, ' '], // [/net /gi, 'nt'],
[/(sub)?total([ \-])/gi, ''], [/other/gi, 'o'], [/from/gi, 'fr'], [/business/gi, 'b '], [/\band\b/gi, '&'], [/ & /gi, '&'], [/([ \-])term/gi, ' tm'], [/short([ \-])term/gi, 'stm'], [/long([ \-])term/gi, 'ltm'], [/non([ \-])/gi, 'n-'], [/weighted([ \-])/gi, 'w'], [/average/gi, 'avg'], [/current/gi, 'cur'], [/asset(s?)/gi, 'ast'], [/income/gi, 'inc'], [/revenue/gi, 'rev'], [/purchase(s?)/gi, 'purc'], [/profit/gi, 'pft'], [/payment(s?)/gi, 'pm'], [/expens(es?)/gi, 'exp'], [/payable(s?)/gi, 'pyb'], [/financ(e|ial|ing)/gi, 'fin'], [/acquisition(s?)/gi, 'acq'], [/capital/gi, 'cap'], [/reserve/gi, 'rsv'], [/inventor(y|ies)/gi, 'invt'], [/invest(ing|ment(s?))/gi, 'iv'], [/interest(s?)/gi, 'intr'], [/insurance/gi, 'insr'], [/goodwill/gi, 'gdw'], [/intangible/gi, 'intg'], [/expenditure(s?)/gi, 'expd'], [/management/gi, 'mang'], [/dividend/gi, 'div'], [/deposit(s?)/gi, 'dps'], [/operating/gi, 'op'], [/receiv(ed|able(s?))/gi, 'recv'], [/liabilities/gi, 'liab'], [/estimated/gi, 'est'], [/unamortized/gi, 'un-amort'], [/due within one year/gi, 'dw1y'], [/attributable to/gi, 'attr '], [/cash (and|&) cash equivalents/gi, 'cce']];

const AbbrCollection = {
  generals: generals,
  balances: balances,
  incomes: incomes,
  cashflows: cashflows,
  basics: basics,
  enterpriseValues: enterpriseValues
};
const Abbr = (...topics) => {
  let dict = generals;

  for (let topic of topics) if (topic in AbbrCollection) dict = dict.concat(AbbrCollection[topic]);

  return dict.sort(([a], [b]) => String(b).length - String(a).length);
};

exports.Abbr = Abbr;
exports.AbbrCollection = AbbrCollection;
exports.balances = balances;
exports.basics = basics;
exports.cashflows = cashflows;
exports.enterpriseValues = enterpriseValues;
exports.generals = generals;
exports.incomes = incomes;
