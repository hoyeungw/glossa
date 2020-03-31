import { decode } from 'iconv-lite'
import { NaiveCsv } from 'naivecsv'
import { Acq } from '@acq/acq'
import { TABLE } from '@analys/enum-tabular-types'
import { ARRAYBUFFER, GBK, UTF8 } from '@spare/enum-encodings'
import { base } from './utils/base'
import { htmlToTable } from '../utils/htmlToTable'
import { TUSH_FIELDS } from './assets/TUSH_FIELDS'
import { SHENWAN_FIELDS } from './assets/SHENWAN_FIELDS'
import { SHENWAN_HEADERS } from './assets/SHENWAN_HEADERS'
import { SHENWAN_PARAMS } from './assets/SHENWAN_PARAMS'
import { SHENWAN_BASEURL } from './assets/SHENWAN_BASEURL'
import { SHENWAN } from '../../../../gulp/constants/sources'
import { Table } from '@analys/table'

export class C12nShenwan {
  static async sectorsByTush ({ format = TABLE } = {}) {
    const page = 'industry_sw'
    return await Acq.tabular({
      title: SHENWAN,
      url: `${base}/${page}.csv`,
      configs: { responseType: ARRAYBUFFER },
      prep: buffer => {
        const text = decode(buffer, UTF8)
        return NaiveCsv.toTable(text)
      },
      fields: TUSH_FIELDS,
      from: TABLE,
      to: format
    })
  }
  static async sectorsOfficial ({ format = TABLE } = {}) {
    return await Acq.tabular({
      title: SHENWAN,
      url: SHENWAN_BASEURL,
      params: SHENWAN_PARAMS,
      configs: { headers: SHENWAN_HEADERS, responseType: ARRAYBUFFER },
      prep: data => {
        const html = decode(data, GBK)
        return Table.from(htmlToTable(html))
      },
      fields: SHENWAN_FIELDS,
      from: TABLE,
      to: format
    })
  }
}


