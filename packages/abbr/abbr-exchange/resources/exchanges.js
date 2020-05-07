export const exchanges = [
  [/open/gi, 'o'],
  [/high/gi, 'hi'],
  [/low/gi, 'lo'],
  [/close/gi, 'e'],
  [/adjusted/gi, 'adj'],
  [/dividend/gi, 'div'],
  [/volum([ne])/gi, 'vol'],
  [/average( ?)/gi, 'avg '],
  [/percent/gi, '%'],
  [/change/gi, 'ch'],
  [/price/gi, 'prc'],
  [/total/gi, ''],
  [/timestamp/gi, 'date'],
  [/circulat(e|ing)/gi, 'cir'],
  [/capitalization/gi, 'cap'],
  [/turnover/gi, 'tnv'],
  [/in (\d*?) days/gi, (_, n) => `d(${n})`]
]
