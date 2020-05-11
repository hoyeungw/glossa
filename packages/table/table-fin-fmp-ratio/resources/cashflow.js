export const cashflow = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'], 
  rows: [
    ['string', 100, 100, 100, 100, 'symbol'        , 'symbol'                            ], 
    ['string', 100, 100, 100, 100, 'date'          , 'date'                              ], 
    ['number', 111, 111, 111, 111, 'opCfPs'        , 'operatingCashFlowPerShare'         ], 
    ['number', 111, 111, 111, 111, 'freeCfPs'      , 'freeCashFlowPerShare'              ], 
    ['number', 111, 111, 111, 111, 'cPs'           , 'cashPerShare'                      ], 
    ['number', 111, 111, 111, 111, 'rPayout'       , 'payoutRatio'                       ], 
    ['number', 111, 111, 111, 111, 'tnRecv'        , 'receivablesTurnover'               ], 
    ['number', 111, 111, 111, 111, 'rOpCfSa'       , 'operatingCashFlowSalesRatio'       ], 
    ['number', 111, 111, 111, 111, 'rFreeCfOpCf'   , 'freeCashFlowOperatingCashFlowRatio'], 
    ['number', 111, 111, 111, 111, 'rCfCov'        , 'cashFlowCoverageRatios'            ], 
    ['number', 111, 111, 111, 111, 'rStCov'        , 'shortTermCoverageRatios'           ], 
    ['number', 111, 111, 111, 111, 'rCapExpdCov'   , 'capitalExpenditureCoverageRatios'  ], 
    ['number', 111, 111, 111, 111, 'rDivpdCapexCov', 'dividendpaidAndCapexCoverageRatios'], 
    ['number', 111, 111, 111, 111, 'rDivPayout'    , 'dividendPayoutRatio'               ], 
  ], 
}