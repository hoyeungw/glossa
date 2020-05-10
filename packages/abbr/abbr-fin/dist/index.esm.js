import { merge, acquire } from '@vect/vector-merge';

const balances = [[/monetary/gi, 'monet'], [/biological/gi, 'bio'], [/accounts?/gi, 'acc'], [/development/gi, 'dev'], [/accumulated/gi, 'accum'], [/engineer(ing)?/gi, 'eng'], [/held-to-maturity/gi, 'htm'], [/available-for-sale/gi, 'afs'], [/shareholders'? equity/gi, 'eqt'], [/retained earnings( ?\(deficit\))?/gi, 're'], [/construction in progress/gi, 'cip'], [/property,? plant (&|and) equipment/gi, 'ppe']];

const incomes = [[/diluted/gi, 'dil'], [/margin/gi, 'mrg'], [/surcharges?/gi, 'surc'], [/associates?/gi, 'asso'], [/net incomes?/gi, 'ni'], [/joint ventures?/gi, 'jv'], [/earnings before/gi, 'eb'], [/earnings per share/gi, 'eps']];

const cashflows = [[/cash/gi, 'c'], [/issuance/gi, 'iss'], [/buybacks?/gi, 'buyb'], [/effect of/gi, ''], [/activities/gi, ''], [/equivalents/gi, 'eqv'], [/stock[ \-]based/gi, 'sb'], [/paid( for)?( to)?/gi, 'pd'], [/(goods)\s[a-zA-Z]+/gi, 'gd'], [/receiv(ed|ables?) from/gi, 'fr'], [/subtotal of cash inflow from/gi, 'cin'], [/subtotal of cash outflow from/gi, 'cout']];

const basics = [[/basic/gi, ''], [/activities/gi, ''], [/return on/gi, 'ro'], [/( ?)per share/gi, 'ps'], [/return on equity/gi, 'roe']];

const enterpriseValues = [[/capitalization/gi, 'cap'], [/stock price/gi, 'prc'], [/number of/gi, 'no'], [/enterprise/gi, 'ent'], [/-/gi, 'minus'], [/\+/gi, 'plus']];

const generals = [[/ {2}/g, ' '], [/the/g, ''], [/bank/gi, 'bk'], [/from/gi, 'fr'], [/other/gi, 'o'], [/sales/gi, 'sa'], [/to be/gi, 'tb'], [/fixed/gi, 'fx'], [/\b&\b/gi, ''], [/\bor\b/gi, ''], [/\band\b/gi, ''], [/\bbut\b/gi, ''], [/but not/gi, 'wo'], [/fees?/gi, 'fe'], [/fin ast/gi, 'fa'], [/profit/gi, 'pft'], [/equity/gi, 'eqt'], [/income/gi, 'inc'], [/average/gi, 'avg'], [/current/gi, 'cur'], [/revenue/gi, 'rev'], [/capital/gi, 'cap'], [/reserve/gi, 'rsv'], [/business/gi, 'b'], [/weighted/gi, 'w'], [/exchange/gi, 'ex'], [/loans?/gi, 'lo'], [/customer/gi, 'cu'], [/tax(es)?/gi, 'tx'], [/deferred/gi, 'def'], [/dividend/gi, 'div'], [/goodwill/gi, 'gdw'], [/original/gi, 'ori'], [/values?/gi, 'v'], [/cash flow/gi, 'cf'], [/preferred/gi, 'pref'], [/consolidated/gi, 'conso'], [/control(ling)?/gi, 'ctrl'], [/operating/gi, 'op'], [/assets?/gi, 'ast'], [/changes?/gi, 'ch'], [/open(ing?)/gi, 'o'], [/non([ \-])/gi, 'n'], [/premiums?/gi, 'prem'], [/deposits?/gi, 'dpo'], [/payments?/gi, 'pm'], [/payables?/gi, 'pyb'], [/expens(es?)/gi, 'exp'], [/estimated/gi, 'est'], [/insurance/gi, 'insr'], [/derivative/gi, 'deri'], [/intangible/gi, 'intg'], [/management/gi, 'mang'], [/recognized/gi, 'recg'], [/liabilities/gi, 'liab'], [/([ \-])term/gi, ' tm'], [/trad(e|ing)/gi, 't'], [/clos(e|ing)/gi, 'c'], [/real estate/gi, 're'], [/valuat(ion)?/gi, 'val'], [/materials?/gi, 'mat'], [/purchases?/gi, 'purc'], [/interests?/gi, 'intr'], [/net assets?/gi, 'bv'], [/depreciation/gi, 'depr'], [/central bank/gi, 'cbk'], [/discontinued/gi, 'disc'], [/balanc(e|ing)/gi, 'bal'], [/minorit(y|ies)/gi, 'min'], [/commissions?/gi, 'cms'], [/comprehensive/gi, 'compr'], [/compensations?/gi, 'compen'], [/weighted[ \-]/gi, 'w'], [/long[ \-]term/gi, 'lt'], [/acquisitions?/gi, 'acq'], [/inventor(y|ies)/gi, 'invt'], [/expenditures?/gi, 'expd'], [/attributable to/gi, 'attr '], [/transaction(al)?/gi, 't'], [/short[ \-]term/gi, 'st'], [/shareholders'? ?/gi, ''], [/(sub)?total[ \-]/gi, ''], [/increase (in|of)/gi, 'ic'], [/decrease (in|of)/gi, 'dc'], [/advance(s?|ment?)/gi, 'adv'], [/financ(e|ial|ing)/gi, 'fin'], [/amortiz(ed|ation)/gi, 'amo'], [/borrow(ings?|ed)/gi, 'borw'], [/receiv(ed|ables?)/gi, 'recv'], [/invest(ing|ments?)/gi, 'iv'], [/product(ive?|ion?)/gi, 'prod'], [/dispos(ed|al|able)/gi, 'dsp'], [/due within one year/gi, 'dw1y'], [/financ(e|ial) assets?/gi, 'fa'], [/(services?)\s[a-zA-Z]+/gi, 'sv'], [/cash (and|&) cash equivalents/gi, 'cce']];

const sortKeysByLength = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable = function (dict) {
  if (this === null || this === void 0 ? void 0 : this.sort) sortKeysByLength(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};

const MakeReplaceable = ({
  sort = true
} = {}) => makeReplaceable.bind({
  sort
});

const makeReplaceable$1 = MakeReplaceable({
  sort: true
});
const DictCollection = {
  get generals() {
    var _merge;

    return _merge = merge(generals, generals), makeReplaceable$1(_merge);
  },

  get balances() {
    var _merge2;

    return _merge2 = merge(generals, balances), makeReplaceable$1(_merge2);
  },

  get incomes() {
    var _merge3;

    return _merge3 = merge(generals, incomes), makeReplaceable$1(_merge3);
  },

  get cashflows() {
    var _merge4;

    return _merge4 = merge(generals, cashflows), makeReplaceable$1(_merge4);
  },

  get basics() {
    var _merge5;

    return _merge5 = merge(generals, basics), makeReplaceable$1(_merge5);
  },

  get enterpriseValues() {
    var _merge6;

    return _merge6 = merge(generals, enterpriseValues), makeReplaceable$1(_merge6);
  }

};

const AbbrCollection = {
  generals: generals,
  balances: balances,
  incomes: incomes,
  cashflows: cashflows,
  basics: basics,
  enterpriseValues: enterpriseValues
};
const Abbr = (...topics) => {
  let dict = acquire([], generals);

  for (let topic of topics) if (topic in AbbrCollection) acquire(dict, AbbrCollection[topic]);

  return dict.sort(([a], [b]) => String(b).length - String(a).length);
};

export { Abbr, AbbrCollection, DictCollection, balances, basics, cashflows, enterpriseValues, generals, incomes };
