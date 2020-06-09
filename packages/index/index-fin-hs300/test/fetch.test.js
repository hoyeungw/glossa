import { TABLE }               from '@analys/enum-tabular-types'
import { DecoPale }            from '@spare/deco-pale'
import { DecoTable, says, xr } from '@spare/logger'
import { ditto }               from '@spare/quote'
import { Verse }               from '@spare/verse'
import { promises }            from 'fs'
import { IndexHS300 }          from '../src/IndexHS300'

IndexHS300
  .indexes({ format: TABLE })
  .then(async table => {
    const dest = __dirname + '/' + '../static/source/IndexHS300.json'
    table |> DecoTable({ top: 3, bottom: 1 }) |> says[`saving to :${dest}`]
    await promises.writeFile(dest, Verse.table(table, {
      keyRead: DecoPale({ quote: ditto }),
      read: DecoPale({ quote: ditto })
    }))
    xr().table(table.title).p('written to').dest(dest) |> says['fs.promises']
  })
