export const fields = [
  'code',
  'name',
  ['industry', 'sector'],
  'area',
  ['timeToMarket', 'est'], //上市日期
  'pe',
  'pb', //市净率
  ['outstanding', 'ots'], //流通股本
  'totals',
  'rev',
  ['profit', 'pft'],
  'gpr',
  'npr',
  ['totalAssets', 'ast'],
  ['liquidAssets', 'curAst'],
  ['fixedAssets', 'fixAst'],
  ['esp', 'eps'],
  'bvps', //每股净资
  'holders',
]

export const fieldRaw = [
  'code',
  'name',
  'industry',
  'area',
  'pe',
  'outstanding',  //流通股本
  'totals',
  'totalAssets',
  'liquidAssets',
  'fixedAssets',
  'reserved', //公积金
  'reservedPerShare',//每股公积金
  'esp',
  'bvps', //每股净资
  'pb', //市净率
  'timeToMarket', //上市日期
  'undp',
  'perundp',
  'rev',
  'profit',
  'gpr',
  'npr',
  'holders',
]
