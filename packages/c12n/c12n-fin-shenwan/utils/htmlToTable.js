const TABLE = /<table[^]*?>([^]*?)<\/table>/gs
const ROW = /<tr>([^]*?)<\/tr>/gs
const HEAD = /<th[^]*?>([^]*?)<\/th>/gs
const VAL = /<td[^]*?>([^]*?)<\/td>/gs
const AVAL = /<a href="([^]*?)"><\/a>/gs
const BVAL = /<b>([^]*?)<\/b>/gs

export const htmlToTable = (html) => {
  const head = [], rows = []
  let m, table, row, field, vec, v
  // one table
  if ((m = TABLE.exec(html)) && ([, table] = m)) {
    if ((m = ROW.exec(table)) && ([, row] = m))
      while ((m = HEAD.exec(row)) && ([, field] = m))
        head.push(field)
    while ((m = ROW.exec(table)) && ([, row] = m) && rows.push(vec = []))
      while ((m = VAL.exec(row)) && ([, v] = m))
        vec.push(v)
  }
  return ({ head, rows })
}
