'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const balances = [[/monetary/gi, 'monet'], [/biological/gi, 'bio'], [/account(s?)/gi, 'acc'], [/development/gi, 'dev'], [/accumulated/gi, 'accum'], [/engineer(ing)?/gi, 'eng'], [/held-to-maturity/gi, 'htm'], [/available-for-sale/gi, 'afs'], [/shareholders('?) equity/gi, 'eqt'], [/construction in progress/gi, 'cip'], [/property, plant (&|and) equipment/gi, 'ppe']];

const incomes = [[/diluted/gi, 'dil'], [/margin/gi, 'mrg'], [/associate(s?)/gi, 'asso'], [/joint venture(s?)/gi, 'jv'], [/surcharge(s?)/gi, 'surc'], [/earnings before/gi, 'eb'], [/earnings per share/gi, 'eps']];

const cashflows = [[/cash/gi, 'c'], [/activities/gi, ''], [/equivalents/gi, 'eqv'], [/paid( for)?( to)?/gi, 'pd'], [/(goods)\s[a-zA-Z]+/gi, 'gd'], [/receiv(ed|able(s?)) from/gi, 'fr'], [/subtotal of cash inflow from/gi, 'cin'], [/subtotal of cash outflow from/gi, 'cout']];

const basics = [[/basic/gi, ''], [/activities/gi, ''], [/return on/gi, 'ro'], [/( ?)per share/gi, 'ps'], [/return on equity/gi, 'roe']];

const enterpriseValues = [[/market /gi, 'mkt'], [/capitalization/gi, 'cap'], [/stock price/gi, 'prc'], [/number of /gi, '#'], [/value/gi, 'val'], [/enterprise/gi, 'ent']];

const generals = [[/ {2}/g, ' '], [/the/g, ''], [/bank/gi, 'bk'], [/from/gi, 'fr'], [/other/gi, 'o'], [/sales/gi, 'sa'], [/to be/gi, 'tb'], [/fixed/gi, 'fx'], [/\b&\b/gi, ''], [/\bor\b/gi, ''], [/\band\b/gi, ''], [/\bbut\b/gi, ''], [/but not/gi, 'wo'], [/fee(s?)/gi, 'fe'], [/fin ast/gi, 'fa'], [/profit/gi, 'pft'], [/equity/gi, 'eqt'], [/income/gi, 'inc'], [/average/gi, 'avg'], [/current/gi, 'cur'], [/revenue/gi, 'rev'], [/capital/gi, 'cap'], [/reserve/gi, 'rsv'], [/business/gi, 'b'], [/weighted/gi, 'w'], [/exchange/gi, 'ex'], [/loan(s?)/gi, 'lo'], [/customer/gi, 'cu'], [/tax(es)?/gi, 'tx'], [/deferred/gi, 'def'], [/dividend/gi, 'div'], [/goodwill/gi, 'gdw'], [/original/gi, 'ori'], [/value(s?)/gi, 'v'], [/cash flow/gi, 'cf'], [/operating/gi, 'op'], [/asset(s?)/gi, 'ast'], [/estimated/gi, 'est'], [/insurance/gi, 'insr'], [/change(s?)/gi, 'ch'], [/open(ing?)/gi, 'o'], [/non([ \-])/gi, 'n'], [/derivative/gi, 'deri'], [/intangible/gi, 'intg'], [/management/gi, 'mang'], [/recognized/gi, 'recg'], [/liabilities/gi, 'liab'], [/premium(s?)/gi, 'prem'], [/deposit(s?)/gi, 'dpo'], [/payment(s?)/gi, 'pm'], [/expens(es?)/gi, 'exp'], [/payable(s?)/gi, 'pyb'], [/([ \-])term/gi, ' tm'], [/trad(e|ing)/gi, 't'], [/clos(e|ing)/gi, 'c'], [/real estate/gi, 're'], [/valuat(ion)?/gi, 'val'], [/material(s?)/gi, 'mat'], [/purchase(s?)/gi, 'purc'], [/depreciation/gi, 'depr'], [/interest(s?)/gi, 'intr'], [/central bank/gi, 'cbk'], [/net asset(s?)/gi, 'bv'], [/balanc(e|ing)/gi, 'bal'], [/minorit(y|ies)/gi, 'min'], [/commission(s?)/gi, 'cms'], [/weighted([ \-])/gi, 'w'], [/long([ \-])term/gi, 'lt'], [/acquisition(s?)/gi, 'acq'], [/inventor(y|ies)/gi, 'invt'], [/expenditure(s?)/gi, 'expd'], [/attributable to/gi, 'attr '], [/transaction(al)?/gi, 't'], [/short([ \-])term/gi, 'st'], [/increase (in|of)/gi, 'ic'], [/decrease (in|of)/gi, 'dc'], [/advance(s?|ment?)/gi, 'adv'], [/financ(e|ial|ing)/gi, 'fin'], [/amortiz(ed|ation)/gi, 'amo'], [/dispos(ed|al|able)/gi, 'dsp'], [/(sub)?total([ \-])/gi, ''], [/borrow(ing(s?)|ed)/gi, 'borw'], [/product(ive?|ion?)/gi, 'prod'], [/receiv(ed|able(s?))/gi, 'recv'], [/due within one year/gi, 'dw1y'], [/shareholders('?)( ?)/gi, ''], [/invest(ing|ment(s?))/gi, 'iv'], [/(service(s?))\s[a-zA-Z]+/gi, 'sv'], [/cash (and|&) cash equivalents/gi, 'cce']];

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
