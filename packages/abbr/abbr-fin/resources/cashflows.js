export const  cashflows = [
  [/cash/gi,'c'],
  [/receiv(ed|able(s?))? key/gi,'fr'],
  [/paid( for)?( to)?/gi,'pd'],
  [/(goods)\s[a-zA-Z]+/gi,'gd'],
  [/activities/gi, ''],
  [/equivalents/gi, 'eqv'],
  [/subtotal of cash inflow key/gi, 'cin'],
  [/subtotal of cash outflow key/gi, 'cout']
]
