import { Table } from '@analys/table';

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

const TableCollection = {
  get cashflow() {
    var _cashflow;

    return _cashflow = cashflow, Table.from(_cashflow);
  },

  get liability() {
    var _liability;

    return _liability = liability, Table.from(_liability);
  },

  get liquidity() {
    var _liquidity;

    return _liquidity = liquidity, Table.from(_liquidity);
  },

  get operation() {
    var _operation;

    return _operation = operation, Table.from(_operation);
  },

  get profitability() {
    var _profitability;

    return _profitability = profitability, Table.from(_profitability);
  },

  get valuation() {
    var _valuation;

    return _valuation = valuation, Table.from(_valuation);
  },

  build(...topics) {
    const table = Table.from({
      head: [TYPE, RAW, DB, LITE, RATIO, ENG],
      rows: [],
      title: 'ratio'
    });

    for (let topic in topics) if (topic in TableCollection) acquire(table.rows, TableCollection[topic].rows);

    return table;
  }

};

export { TableCollection, cashflow, liability, liquidity, operation, profitability, valuation };
