export const liability = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'], 
  rows: [
    ['string', 100, 100, 100, 100, 'symbol'     , 'symbol'                      ], 
    ['string', 100, 100, 100, 100, 'date'       , 'date'                        ], 
    ['number', 111, 111, 111, 111, 'rDebt'      , 'debtRatio'                   ], 
    ['number', 111, 111, 111, 111, 'rDebtEqt'   , 'debtEquityRatio'             ], 
    ['number', 111, 111, 111, 111, 'ltDebtToCap', 'longtermDebtToCapitalization'], 
    ['number', 111, 111, 111, 111, 'debtToCap'  , 'totalDebtToCapitalization'   ], 
    ['number', 111, 111, 111, 111, 'intrCov'    , 'interestCoverage'            ], 
    ['number', 111, 111, 111, 111, 'rCfToDebt'  , 'cashFlowToDebtRatio'         ], 
    ['number', 111, 111, 111, 111, 'eqtMul'     , 'companyEquityMultiplier'     ], 
  ], 
}