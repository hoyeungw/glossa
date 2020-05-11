export const liquidity = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng'], 
  rows: [
    ['string', 100, 100, 100, 100, 'symbol'      , 'symbol'                    ], 
    ['string', 100, 100, 100, 100, 'date'        , 'date'                      ], 
    ['number', 111, 111, 111, 111, 'rCur'        , 'currentRatio'              ], 
    ['number', 111, 111, 111, 111, 'rQuick'      , 'quickRatio'                ], 
    ['number', 111, 111, 111, 111, 'rC'          , 'cashRatio'                 ], 
    ['number', 111, 111, 111, 111, 'daysSaOuts'  , 'daysOfSalesOutstanding'    ], 
    ['number', 111, 111, 111, 111, 'daysInvtOuts', 'daysOfInventoryOutstanding'], 
    ['number', 111, 111, 111, 111, 'opCycle'     , 'operatingCycle'            ], 
    ['number', 111, 111, 111, 111, 'daysPybOuts' , 'daysOfPayablesOutstanding' ], 
    ['number', 111, 111, 111, 111, 'cConvCycle'  , 'cashConversionCycle'       ], 
  ], 
}