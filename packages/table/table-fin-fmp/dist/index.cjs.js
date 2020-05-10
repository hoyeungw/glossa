'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var table = require('@analys/table');

const balances = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'cce', 'cash and cash equivalents'], ['number', 111, 111, 111, 111, 'stIv', 'short-term investments'], ['number', 111, 111, 111, 111, 'cashStIv', 'cash and short-term investments'], ['number', 111, 111, 111, 111, 'recv', 'receivables'], ['number', 111, 111, 111, 111, 'invt', 'inventories'], ['number', 110, 110, 110, 110, 'curAst', 'total current assets'], ['number', 161, 161, 161, 161, 'ppeNet', 'property plant & equipment net'], ['number', 161, 161, 161, 161, 'gdwIntgAst', 'goodwill and intangible assets'], ['number', 161, 161, 161, 161, 'ltIv', 'long-term investments'], ['number', 161, 161, 161, 161, 'txAst', 'tax assets'], ['number', 160, 160, 160, 160, 'ncurAst', 'total non-current assets'], ['number', 101, 101, 101, 101, 'ast', 'total assets'], ['number', 211, 211, 211, 211, 'pyb', 'payables'], ['number', 211, 211, 211, 211, 'stDebt', 'short-term debt'], ['number', 210, 210, 210, 210, 'curLiab', 'total current liabilities'], ['number', 261, 261, 261, 261, 'ltDebt', 'long-term debt'], ['number', 261, 261, 261, 261, 'debt', 'total debt'], ['number', 261, 261, 261, 261, 'defRev', 'deferred revenue'], ['number', 261, 261, 261, 261, 'txLiab', 'tax liabilities'], ['number', 261, 261, 261, 261, 'dpoLiab', 'deposit liabilities'], ['number', 260, 260, 260, 260, 'ncurLiab', 'total non-current liabilities'], ['number', 201, 201, 201, 201, 'liab', 'total liabilities'], ['number', 311, 311, 311, 311, 'oComprInc', 'other comprehensive income'], ['number', 311, 311, 311, 311, 're', 'retained earnings (deficit)'], ['number', 301, 301, 301, 301, 'eqt', 'total shareholders equity'], ['number', 400, 400, NaN, NaN, 'iv', 'investments'], ['number', 400, 400, NaN, NaN, 'netDebt', 'net debt'], ['number', 400, 400, NaN, NaN, 'oAst', 'other assets'], ['number', 400, 400, NaN, NaN, 'oLiab', 'other liabilities']]
};

const incomes = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 101, 101, 101, 101, 'rev', 'revenue'], ['number', 102, 102, 102, 102, 'revGrowth', 'revenue growth'], ['number', 200, 200, 200, 200, 'costOfRev', 'cost of revenue'], ['number', 210, 210, 210, 210, 'grossPft', 'gross profit'], ['number', 210, 210, 210, 210, 'rdExp', 'r&d expenses'], ['number', 210, 210, 210, 210, 'sgaExp', 'sg&a expense'], ['number', 210, 210, 210, 210, 'opExp', 'operating expenses'], ['number', 210, 210, 210, 210, 'opInc', 'operating income'], ['number', 210, 210, 210, 210, 'intrExp', 'interest expense'], ['number', 400, 400, 400, 400, 'ebTx', 'earnings before tax'], ['number', 220, 220, 220, 220, 'incTxExp', 'income tax expense'], ['number', 301, 301, NaN, NaN, 'niNctrlInt', 'net income - non-controlling int'], ['number', 302, 302, NaN, NaN, 'niDiscOps', 'net income - discontinued ops'], ['number', 300, 300, 300, 300, 'ni', 'net income'], ['number', 630, 630, NaN, NaN, 'prefDivs', 'preferred dividends'], ['number', 300, 300, 300, 300, 'niCom', 'net income com'], ['number', 600, 600, NaN, NaN, 'eps', 'eps'], ['number', 601, 601, NaN, NaN, 'epsDil', 'eps diluted'], ['number', 610, 610, NaN, NaN, 'wavgShsOut', 'weighted average shs out'], ['number', 611, 611, NaN, NaN, 'wavgShsOutDil', 'weighted average shs out (dil)'], ['number', 620, 620, NaN, NaN, 'divPerShare', 'dividend per share'], ['number', 500, 500, NaN, NaN, 'grossMrg', 'gross margin'], ['number', 501, 501, NaN, NaN, 'ebitdaMrg', 'ebitda margin'], ['number', 502, 502, NaN, NaN, 'ebitMrg', 'ebit margin'], ['number', 503, 503, NaN, NaN, 'pftMrg', 'profit margin'], ['number', 504, 504, NaN, NaN, 'freeCfMrg', 'free cash flow margin'], ['number', 400, 400, 400, 400, 'ebitda', 'ebitda'], ['number', 400, 400, 400, 400, 'ebit', 'ebit'], ['number', 400, 400, 400, 400, 'consoInc', 'consolidated income'], ['number', 505, 505, NaN, NaN, 'ebTxMrg', 'earnings before tax margin'], ['number', 506, 506, NaN, NaN, 'netPftMrg', 'net profit margin']]
};

const cashflows = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 100, 100, 100, 100, 'deprAmo', 'depreciation & amortization'], ['number', 100, 100, 100, 100, 'sbCompen', 'stock-based compensation'], ['number', 100, 100, 100, 100, 'opCf', 'operating cash flow'], ['number', 100, 100, 100, 100, 'capExpd', 'capital expenditure'], ['number', 100, 100, 100, 100, 'acqDsps', 'acquisitions and disposals'], ['number', 100, 100, 100, 100, 'ivPurcSa', 'investment purchases and sales'], ['number', 100, 100, 100, 100, 'ivCf', 'investing cash flow'], ['number', 100, 100, 100, 100, 'issRepmOfDebt', 'issuance (repayment) of debt'], ['number', 100, 100, 100, 100, 'issBuybOfShares', 'issuance (buybacks) of shares'], ['number', 100, 100, 100, 100, 'divPm', 'dividend payments'], ['number', 100, 100, 100, 100, 'finCf', 'financing cash flow'], ['number', 100, 100, 100, 100, 'forexChOnC', 'effect of forex changes on cash'], ['number', 100, 100, 100, 100, 'netCfChInC', 'net cash flow / change in cash'], ['number', 100, 100, 100, 100, 'freeCf', 'free cash flow'], ['number', 100, 100, 100, 100, 'netCMarketcap', 'net cash/marketcap']]
};

const enterpriseValues = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'prc', 'Stock Price'], ['number', 111, 111, 111, 111, 'noShares', 'Number of Shares'], ['number', 111, 111, 111, 111, 'marketCap', 'Market Capitalization'], ['number', 111, 111, 111, 111, 'minusCce', '- Cash & Cash Equivalents'], ['number', 111, 111, 111, 111, 'plusDebt', '+ Total Debt'], ['number', 111, 111, 111, 111, 'entV', 'Enterprise Value']]
};

const TableCollection = {
  get balances() {
    return table.Table.from(balances);
  },

  get incomes() {
    return table.Table.from(incomes);
  },

  get cashflows() {
    return table.Table.from(cashflows);
  },

  get enterpriseValues() {
    return table.Table.from(enterpriseValues);
  }

};

exports.TableCollection = TableCollection;
exports.balances = balances;
exports.cashflows = cashflows;
exports.enterpriseValues = enterpriseValues;
exports.incomes = incomes;
