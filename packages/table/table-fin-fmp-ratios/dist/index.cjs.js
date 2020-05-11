'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var table = require('@analys/table');

const cashflow = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'opCfPs', 'operatingCashFlowPerShare'], ['number', 111, 111, 111, 111, 'freeCfPs', 'freeCashFlowPerShare'], ['number', 111, 111, 111, 111, 'cPs', 'cashPerShare'], ['number', 111, 111, 111, 111, 'rPayout', 'payoutRatio'], ['number', 111, 111, 111, 111, 'tnRecv', 'receivablesTurnover'], ['number', 111, 111, 111, 111, 'rOpCfSa', 'operatingCashFlowSalesRatio'], ['number', 111, 111, 111, 111, 'rFreeCfOpCf', 'freeCashFlowOperatingCashFlowRatio'], ['number', 111, 111, 111, 111, 'rCfCov', 'cashFlowCoverageRatios'], ['number', 111, 111, 111, 111, 'rStCov', 'shortTermCoverageRatios'], ['number', 111, 111, 111, 111, 'rCapExpdCov', 'capitalExpenditureCoverageRatios'], ['number', 111, 111, 111, 111, 'rDivpdCapexCov', 'dividendpaidAndCapexCoverageRatios'], ['number', 111, 111, 111, 111, 'rDivPayout', 'dividendPayoutRatio']]
};

const liability = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'rDebt', 'debtRatio'], ['number', 111, 111, 111, 111, 'rDebtEqt', 'debtEquityRatio'], ['number', 111, 111, 111, 111, 'ltDebtToCap', 'longtermDebtToCapitalization'], ['number', 111, 111, 111, 111, 'debtToCap', 'totalDebtToCapitalization'], ['number', 111, 111, 111, 111, 'intrCov', 'interestCoverage'], ['number', 111, 111, 111, 111, 'rCfToDebt', 'cashFlowToDebtRatio'], ['number', 111, 111, 111, 111, 'eqtMul', 'companyEquityMultiplier']]
};

const liquidity = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'rCur', 'currentRatio'], ['number', 111, 111, 111, 111, 'rQuick', 'quickRatio'], ['number', 111, 111, 111, 111, 'rC', 'cashRatio'], ['number', 111, 111, 111, 111, 'daysSaOuts', 'daysOfSalesOutstanding'], ['number', 111, 111, 111, 111, 'daysInvtOuts', 'daysOfInventoryOutstanding'], ['number', 111, 111, 111, 111, 'opCycle', 'operatingCycle'], ['number', 111, 111, 111, 111, 'daysPybOuts', 'daysOfPayablesOutstanding'], ['number', 111, 111, 111, 111, 'cConvCycle', 'cashConversionCycle']]
};

const operation = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'tnRecv', 'receivablesTurnover'], ['number', 111, 111, 111, 111, 'tnPyb', 'payablesTurnover'], ['number', 111, 111, 111, 111, 'tnInvt', 'inventoryTurnover'], ['number', 111, 111, 111, 111, 'tnFxAst', 'fixedAssetTurnover'], ['number', 111, 111, 111, 111, 'tnAst', 'assetTurnover']]
};

const profitability = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'ebitToRev', 'ebitperRevenue'], ['number', 111, 111, 111, 111, 'ebtToEbit', 'ebtperEBIT'], ['number', 111, 111, 111, 111, 'niToEbt', 'niperEBT'], ['number', 111, 111, 111, 111, 'gPfMg', 'grossProfitMargin'], ['number', 111, 111, 111, 111, 'opPfMg', 'operatingProfitMargin'], ['number', 111, 111, 111, 111, 'pfbtMg', 'pretaxProfitMargin'], ['number', 111, 111, 111, 111, 'netPfMg', 'netProfitMargin'], ['number', 111, 111, 111, 111, 'rEffTx', 'effectiveTaxRate'], ['number', 111, 111, 111, 111, 'roAst', 'returnOnAssets'], ['number', 111, 111, 111, 111, 'roEqt', 'returnOnEquity'], ['number', 111, 111, 111, 111, 'roCapEmp', 'returnOnCapitalEmployed'], ['number', 111, 111, 111, 111, 'niEbt', 'nIperEBT'], ['number', 111, 111, 111, 111, 'ebtEbit', 'eBTperEBIT'], ['number', 111, 111, 111, 111, 'ebitRev', 'eBITperRevenue']]
};

const valuation = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol'], ['string', 100, 100, 100, 100, 'date', 'date'], ['number', 111, 111, 111, 111, 'pBV', 'priceBookValueRatio'], ['number', 111, 111, 111, 111, 'pB', 'priceToBookRatio'], ['number', 111, 111, 111, 111, 'pSa', 'priceToSalesRatio'], ['number', 111, 111, 111, 111, 'pE', 'priceEarningsRatio'], ['number', 111, 111, 111, 111, 'tnRecv', 'receivablesTurnover'], ['number', 111, 111, 111, 111, 'pFreeCfs', 'priceToFreeCashFlowsRatio'], ['number', 111, 111, 111, 111, 'pOpCfs', 'priceToOperatingCashFlowsRatio'], ['number', 111, 111, 111, 111, 'pCf', 'priceCashFlowRatio'], ['number', 111, 111, 111, 111, 'pEToGr', 'priceEarningsToGrowthRatio'], ['number', 111, 111, 111, 111, 'pSa', 'priceSalesRatio'], ['number', 111, 111, 111, 111, 'divYield', 'dividendYield'], ['number', 111, 111, 111, 111, 'entVMul', 'enterpriseValueMultiple'], ['number', 111, 111, 111, 111, 'pFairV', 'priceFairValue']]
};

const RAW = 'raw',
      LITE = 'lite',
      DB = 'db',
      RATIO = 'ratio';

const ENG = 'eng';

const TYPE = 'type';

// export default Function.prototype.apply.bind(Array.prototype.push)
const acquire = (va, vb) => (Array.prototype.push.apply(va, vb), va); // export default Function.prototype.call.bind(Array.prototype.concat)

// from x => typeof x
const NUM = 'number';
const STR = 'string';

const cashflow$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], [STR, 100, 100, 100, 100, 'date'], [NUM, 111, 111, 111, 111, 'operatingCashFlowPerShare'], [NUM, 111, 111, 111, 111, 'freeCashFlowPerShare'], [NUM, 111, 111, 111, 111, 'cashPerShare'], [NUM, 111, 111, 111, 111, 'payoutRatio'], [NUM, 111, 111, 111, 111, 'receivablesTurnover'], [NUM, 111, 111, 111, 111, 'operatingCashFlowSalesRatio'], [NUM, 111, 111, 111, 111, 'freeCashFlowOperatingCashFlowRatio'], [NUM, 111, 111, 111, 111, 'cashFlowCoverageRatios'], [NUM, 111, 111, 111, 111, 'shortTermCoverageRatios'], [NUM, 111, 111, 111, 111, 'capitalExpenditureCoverageRatios'], [NUM, 111, 111, 111, 111, 'dividendpaidAndCapexCoverageRatios'], [NUM, 111, 111, 111, 111, 'dividendPayoutRatio']]
};

const liability$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], [STR, 100, 100, 100, 100, 'date'], [NUM, 111, 111, 111, 111, 'debtRatio'], [NUM, 111, 111, 111, 111, 'debtEquityRatio'], [NUM, 111, 111, 111, 111, 'longtermDebtToCapitalization'], [NUM, 111, 111, 111, 111, 'totalDebtToCapitalization'], [NUM, 111, 111, 111, 111, 'interestCoverage'], [NUM, 111, 111, 111, 111, 'cashFlowToDebtRatio'], [NUM, 111, 111, 111, 111, 'companyEquityMultiplier']]
};

const liquidity$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], [STR, 100, 100, 100, 100, 'date'], [NUM, 111, 111, 111, 111, 'currentRatio'], [NUM, 111, 111, 111, 111, 'quickRatio'], [NUM, 111, 111, 111, 111, 'cashRatio'], [NUM, 111, 111, 111, 111, 'daysOfSalesOutstanding'], [NUM, 111, 111, 111, 111, 'daysOfInventoryOutstanding'], [NUM, 111, 111, 111, 111, 'operatingCycle'], [NUM, 111, 111, 111, 111, 'daysOfPayablesOutstanding'], [NUM, 111, 111, 111, 111, 'cashConversionCycle']]
};

const operation$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], [STR, 100, 100, 100, 100, 'date'], [NUM, 111, 111, 111, 111, 'receivablesTurnover'], [NUM, 111, 111, 111, 111, 'payablesTurnover'], [NUM, 111, 111, 111, 111, 'inventoryTurnover'], [NUM, 111, 111, 111, 111, 'fixedAssetTurnover'], [NUM, 111, 111, 111, 111, 'assetTurnover']]
};

const profitability$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], [STR, 100, 100, 100, 100, 'date'], [NUM, 111, 111, 111, 111, 'ebitperRevenue'], [NUM, 111, 111, 111, 111, 'ebtperEBIT'], [NUM, 111, 111, 111, 111, 'niperEBT'], [NUM, 111, 111, 111, 111, 'grossProfitMargin'], [NUM, 111, 111, 111, 111, 'operatingProfitMargin'], [NUM, 111, 111, 111, 111, 'pretaxProfitMargin'], [NUM, 111, 111, 111, 111, 'netProfitMargin'], [NUM, 111, 111, 111, 111, 'effectiveTaxRate'], [NUM, 111, 111, 111, 111, 'returnOnAssets'], [NUM, 111, 111, 111, 111, 'returnOnEquity'], [NUM, 111, 111, 111, 111, 'returnOnCapitalEmployed'], [NUM, 111, 111, 111, 111, 'nIperEBT'], [NUM, 111, 111, 111, 111, 'eBTperEBIT'], [NUM, 111, 111, 111, 111, 'eBITperRevenue']]
};

const valuation$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, ENG],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], [STR, 100, 100, 100, 100, 'date'], [NUM, 111, 111, 111, 111, 'priceBookValueRatio'], [NUM, 111, 111, 111, 111, 'priceToBookRatio'], [NUM, 111, 111, 111, 111, 'priceToSalesRatio'], [NUM, 111, 111, 111, 111, 'priceEarningsRatio'], [NUM, 111, 111, 111, 111, 'receivablesTurnover'], [NUM, 111, 111, 111, 111, 'priceToFreeCashFlowsRatio'], [NUM, 111, 111, 111, 111, 'priceToOperatingCashFlowsRatio'], [NUM, 111, 111, 111, 111, 'priceCashFlowRatio'], [NUM, 111, 111, 111, 111, 'priceEarningsToGrowthRatio'], [NUM, 111, 111, 111, 111, 'priceSalesRatio'], [NUM, 111, 111, 111, 111, 'dividendYield'], [NUM, 111, 111, 111, 111, 'enterpriseValueMultiple'], [NUM, 111, 111, 111, 111, 'priceFairValue']]
};

const TableCollection = {
  get cashflow() {
    var _cashflow;

    return _cashflow = cashflow$1, table.Table.from(_cashflow);
  },

  get liability() {
    var _liability;

    return _liability = liability$1, table.Table.from(_liability);
  },

  get liquidity() {
    var _liquidity;

    return _liquidity = liquidity$1, table.Table.from(_liquidity);
  },

  get operation() {
    var _operation;

    return _operation = operation$1, table.Table.from(_operation);
  },

  get profitability() {
    var _profitability;

    return _profitability = profitability$1, table.Table.from(_profitability);
  },

  get valuation() {
    var _valuation;

    return _valuation = valuation$1, table.Table.from(_valuation);
  },

  build(...topics) {
    const table$1 = table.Table.from({
      head: [TYPE, RAW, DB, LITE, RATIO, ENG],
      rows: [],
      title: 'ratio'
    });

    for (let topic in topics) if (topic in TableCollection) acquire(table$1.rows, TableCollection[topic].rows);

    return table$1;
  }

};

exports.TableCollection = TableCollection;
exports.cashflow = cashflow;
exports.liability = liability;
exports.liquidity = liquidity;
exports.operation = operation;
exports.profitability = profitability;
exports.valuation = valuation;
