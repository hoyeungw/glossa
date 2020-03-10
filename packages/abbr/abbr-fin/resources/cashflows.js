export const  cashflows = [
  [/cash/gi,'c'],
  [/receiv(ed|able(s?))? from/gi,'fr'],
  [/paid( for)?( to)?/gi,'pd'],
  [/(goods)\s[a-zA-Z]+/gi,'gd'],
  [/activities/gi, ''],
  [/equivalents/gi, 'eqv'],
  [/subtotal of cash inflow from/gi, 'cin'],
  [/subtotal of cash outflow from/gi, 'cout']
]
