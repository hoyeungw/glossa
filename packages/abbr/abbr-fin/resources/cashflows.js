export const cashflows = [
  [/cash/gi, 'c'],
  [/issuance/gi, 'iss'],
  [/buybacks?/gi, 'buyb'],
  [/effect of/gi, ''],
  [/activities/gi, ''],
  [/equivalents/gi, 'eqv'],
  [/stock[ \-]based/gi, 'sb'],
  [/paid( for)?( to)?/gi, 'pd'],
  [/(goods)\s[a-zA-Z]+/gi, 'gd'],
  [/receiv(ed|ables?) from/gi, 'fr'],
  [/subtotal of cash inflow from/gi, 'cin'],
  [/subtotal of cash outflow from/gi, 'cout']
]
