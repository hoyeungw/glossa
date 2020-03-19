import { Histo } from '@aryth/histo'

export const columnHisto = (table, { field, maxTicks, objectify }) => {
  const column = table.column(field)
  const histo = Histo.fromSamples(column, maxTicks)
  return histo.statistics({ objectify })
}
