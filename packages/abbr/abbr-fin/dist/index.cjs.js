'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const balances = [[/monetary/gi, 'monet'], [/biological/gi, 'bio'], [/account(s?)/gi, 'acc'], [/development/gi, 'dev'], [/accumulated/gi, 'accum'], [/engineer(ing)?/gi, 'eng'], [/held-to-maturity/gi, 'htm'], [/available-for-sale/gi, 'afs'], [/shareholders('?) equity/gi, 'eqt'], [/construction in progress/gi, 'cip'], [/property, plant (&|and) equipment/gi, 'ppe']];

const incomes = [[/diluted/gi, 'dil'], [/margin/gi, 'mrg'], [/associate(s?)/gi, 'asso'], [/joint venture(s?)/gi, 'jv'], [/surcharge(s?)/gi, 'surc'], [/earnings before/gi, 'eb'], [/earnings per share/gi, 'eps']];

const cashflows = [[/cash/gi, 'c'], [/receiv(ed|able(s?))? from/gi, 'fr'], [/paid( for)?( to)?/gi, 'pd'], [/(goods)\s[a-zA-Z]+/gi, 'gd'], [/activities/gi, ''], [/equivalents/gi, 'eqv'], [/subtotal of cash inflow from/gi, 'cin'], [/subtotal of cash outflow from/gi, 'cout']];

const basics = [[/basic/gi, ''], [/activities/gi, ''], [/return on/gi, 'ro'], [/( ?)per share/gi, 'ps'], [/return on equity/gi, 'roe']];

const enterpriseValues = [[/market /gi, 'mkt'], [/capitalization/gi, 'cap'], [/stock price/gi, 'prc'], [/number of /gi, '#'], [/value/gi, 'val'], [/enterprise/gi, 'ent']];

const generals = [[/ {2}/g, ' '], [/the/g, ''], [/other/gi, 'o'], [/bank/gi, 'bk'], [/from/gi, 'fr'], [/sales/gi, 'sa'], [/to be/gi, 'tb'], [/fee(s?)/gi, 'fe'], [/tax(es)?/gi, 'tx'], [/fixed/gi, 'fx'], [/value(s?)/gi, 'v'], [/equity/gi, 'eqt'], [/\b&\b/gi, ''], [/\bor\b/gi, ''], [/\band\b/gi, ''], [/\bbut\b/gi, ''], [/but not/gi, 'wo'], [/change(s?)/gi, 'ch'], [/income/gi, 'inc'], [/average/gi, 'avg'], [/current/gi, 'cur'], [/original/gi, 'ori'], [/asset(s?)/gi, 'ast'], [/business/gi, 'b'], [/customer/gi, 'cu'], [/open(ing?)/gi, 'o'], [/revenue/gi, 'rev'], [/deferred/gi, 'def'], [/fin ast/gi, 'fa'], [/cash flow/gi, 'cf'], [/profit/gi, 'pft'], [/capital/gi, 'cap'], [/reserve/gi, 'rsv'], [/dividend/gi, 'div'], [/goodwill/gi, 'gdw'], [/exchange/gi, 'ex'], [/loan(s?)/gi, 'lo'], [/insurance/gi, 'insr'], [/operating/gi, 'op'], [/estimated/gi, 'est'], [/non([ \-])/gi, 'n'], [/derivative/gi, 'deri'], [/intangible/gi, 'intg'], [/management/gi, 'mang'], [/recognized/gi, 'recg'], [/liabilities/gi, 'liab'], [/premium(s?)/gi, 'prem'], [/deposit(s?)/gi, 'dpo'], [/payment(s?)/gi, 'pm'], [/expens(es?)/gi, 'exp'], [/payable(s?)/gi, 'pyb'], [/([ \-])term/gi, ' tm'], [/trad(e|ing)/gi, 't'], [/clos(e|ing)/gi, 'c'], [/real estate/gi, 're'], [/valuat(ion)?/gi, 'val'], [/material(s?)/gi, 'mat'], [/purchase(s?)/gi, 'purc'], [/depreciation/gi, 'depr'], [/interest(s?)/gi, 'intr'], [/net asset(s?)/gi, 'bv'], [/balanc(e|ing)/gi, 'bal'], [/central bank/gi, 'cbk'], [/minorit(y|ies)/gi, 'min'], [/commission(s?)/gi, 'cms'], [/weighted([ \-])/gi, 'w'], [/long([ \-])term/gi, 'lt'], [/acquisition(s?)/gi, 'acq'], [/inventor(y|ies)/gi, 'invt'], [/transaction(al)?/gi, 't'], [/short([ \-])term/gi, 'st'], [/advance(s?|ment?)/gi, 'adv'], [/financ(e|ial|ing)/gi, 'fin'], [/increase (in|of)/gi, 'ic'], [/decrease (in|of)/gi, 'dc'], [/dispos(ed|al|able)/gi, 'dsp'], [/expenditure(s?)/gi, 'expd'], [/attributable to/gi, 'attr '], [/amortiz(ed|ation)/gi, 'amo'], [/(sub)?total([ \-])/gi, ''], [/borrow(ing(s?)|ed)/gi, 'borw'], [/product(ive?|ion?)/gi, 'prod'], [/receiv(ed|able(s?))/gi, 'recv'], [/due within one year/gi, 'dw1y'], [/shareholders('?)( ?)/gi, ''], [/invest(ing|ment(s?))/gi, 'iv'], [/(service(s?))\s[a-zA-Z]+/gi, 'sv'], [/cash (and|&) cash equivalents/gi, 'cce']];

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
