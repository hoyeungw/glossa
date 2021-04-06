import { NUM_ASC, NUM_DESC } from '@aryth/comparer'
import { tableAcquire, tableMerge } from '@analys/table-merge'
import { mutaRank } from '@aryth/rank-column'
import { isNumeric } from '@typen/num-strict'
import { IMMUTABLE } from '@analys/enum-mutabilities'
import { round } from '@aryth/math'

export const tableAddRank = (table, { fields, label, base = 1, sort = false, mutate = true }) => {
  let tableBeta = table.select(fields, IMMUTABLE)
  for (let f of fields) {
    tableBeta.mutateColumn(f, x => isNumeric(x) ? +x : 0)
    mutaRank(tableBeta.rows, tableBeta.coin(f), NUM_ASC)
  }
  const column = tableBeta.rows.map(row => round(row.reduce((a, b) => a + b) / base))
  tableBeta.pushColumn(label, column)
  table = mutate
    ? tableAcquire(table, tableBeta.select([label]))
    : tableMerge(table, tableBeta.select([label]))
  if (sort) table.sort(label, NUM_DESC)
  return table
}
