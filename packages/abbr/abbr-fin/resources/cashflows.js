export const  cashflows = [
  [/cash/gi,'c'],
  [/activities/gi, ''],
  [/equivalents/gi, 'eqv'],
  [/paid( for)?( to)?/gi,'pd'],
  [/(goods)\s[a-zA-Z]+/gi,'gd'],
  [/receiv(ed|able(s?)) from/gi,'fr'],
  [/subtotal of cash inflow from/gi, 'cin'],
  [/subtotal of cash outflow from/gi, 'cout']
]
