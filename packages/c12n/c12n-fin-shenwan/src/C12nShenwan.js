import { NaiveCsv } from 'naivecsv'
import { decode } from 'iconv-lite'
import { Acq } from '@acq/acq'
import { TABLE } from '@analys/enum-tabular-types'
import { ARRAYBUFFER, UTF8 } from '@spare/enum-encodings'
import { base } from './utils/base'
import { fields } from './utils/fields'

export class C12nShenwan {
  static async sectors ({ format = TABLE } = {}) {
    const page = 'industry_sw'
    return await Acq.tabular({
      title: 'shenwan',
      url: `${base}/${page}.csv`,
      prep: buffer => {
        const text = decode(buffer, UTF8)
        return NaiveCsv.toTable(text)
      },
      configs: { responseType: ARRAYBUFFER },
      fields,
      from: TABLE,
      to: format
    })
  }
}


