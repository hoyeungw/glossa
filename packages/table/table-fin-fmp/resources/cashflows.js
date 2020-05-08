export const cashflows = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'], 
  rows: [
    ['string', 100, 100, 100, 100, 'symbol'         , 'symbol'                         ], 
    ['string', 100, 100, 100, 100, 'date'           , 'date'                           ], 
    ['number', 100, 100, 100, 100, 'deprAmo'        , 'depreciation & amortization'    ], 
    ['number', 100, 100, 100, 100, 'sbCompen'       , 'stock-based compensation'       ], 
    ['number', 100, 100, 100, 100, 'opCf'           , 'operating cash flow'            ], 
    ['number', 100, 100, 100, 100, 'capExpd'        , 'capital expenditure'            ], 
    ['number', 100, 100, 100, 100, 'acqDsps'        , 'acquisitions and disposals'     ], 
    ['number', 100, 100, 100, 100, 'ivPurcSa'       , 'investment purchases and sales' ], 
    ['number', 100, 100, 100, 100, 'ivCf'           , 'investing cash flow'            ], 
    ['number', 100, 100, 100, 100, 'issRepmOfDebt'  , 'issuance (repayment) of debt'   ], 
    ['number', 100, 100, 100, 100, 'issBuybOfShares', 'issuance (buybacks) of shares'  ], 
    ['number', 100, 100, 100, 100, 'divPm'          , 'dividend payments'              ], 
    ['number', 100, 100, 100, 100, 'finCf'          , 'financing cash flow'            ], 
    ['number', 100, 100, 100, 100, 'forexChOnC'     , 'effect of forex changes on cash'], 
    ['number', 100, 100, 100, 100, 'netCfChInC'     , 'net cash flow / change in cash' ], 
    ['number', 100, 100, 100, 100, 'freeCf'         , 'free cash flow'                 ], 
    ['number', 100, 100, 100, 100, 'netCMarketcap'  , 'net cash/marketcap'             ], 
  ], 
}