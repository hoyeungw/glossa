import xlsx from 'xlsx'
import { NaiveCsv } from 'naivecsv'
import { Acq } from '@acq/acq'
import { TABLE } from '@analys/enum-tabular-types'
import { ARRAYBUFFER } from '@spare/enum-encodings'
import {  fieldsArch, fieldsEasy } from './utils/fields'

export class IndexHS300 {
  static async indexes ({ format = TABLE, easy = true } = {}) {
    return await Acq
      .tabular({
        title: 'hs300',
        url: 'http://www.csindex.com.cn/uploads/file/autofile/closeweight/000300closeweight.xls',
        prep: data => {
          const workbook = xlsx.read(data)
          const sheet = workbook.Sheets['Index Constituents Data']
          const csv = xlsx.utils.sheet_to_csv(sheet)
          return NaiveCsv.toTable(csv)
        },
        fields: easy ? fieldsEasy : fieldsArch,
        configs: { responseType: ARRAYBUFFER },
        from: TABLE,
        to: format
      })
  }
}


