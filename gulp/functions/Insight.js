import { waitOra } from '../utils/waitOra'
import { says } from '@palett/says'
import { deca, DecoTable } from '@spare/logger'

export const Insight = ({ filename, table, insight, delay = 1200 } = {}) =>
  async () => {
    if (!table) return void 0
    await table |> DecoTable({ top: 2, bottom: 1, fullAngle: true }) |> says['insight'].br(filename)
    await waitOra(delay, says.roster('insight'))
    if (!insight) return void 0
    await insight(table) |> deca({ wa: 10 }) |> says['insight'].br(filename)
    await waitOra(delay, says.roster('insight'))
  }
