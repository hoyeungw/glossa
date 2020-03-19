import { decode } from 'iconv-lite'
import { NaiveCsv } from 'naivecsv'
import { Acq } from '@acq/acq'
import { TABLE } from '@analys/enum-tabular-types'
import { ARRAYBUFFER, GBK } from '@spare/enum-encodings'
import { base } from './utils/base'
import { fields } from './utils/fields'

/**
 * @typedef {string|number} str
 * @typedef {{field:*,filter:function}} Filter
 */

export class C12nTs {
  static async dailySectors ({ format = TABLE } = {}) {
    return await Acq.tabular({
      title: 'dailySectors',
      url: base,
      prep: buffer => {
        const text = decode(buffer, GBK)
        return NaiveCsv.toTable(text)
      },
      configs: { responseType: ARRAYBUFFER },
      fields,
      from: TABLE,
      to: format
    })
  }
}

const fieldShown = [
  'code', // 代码
  'name', // 名称
  'sector', //
  'area', // 地区
  'est', // 上市日期
  'pe', // 市盈率
  'pb', // 市净率
  'ots', // 流通股本
  'totals', // 总股本
  'rev', // 收益
  'pft', // 利润
  'gpr', // 毛利率
  'npr', // 净利率
  'ast', // 总资产
  'curAst', // 流动资产
  'fixAst', // 固定资产
  'eps', // 每股收益
  'bvps', //每股净资产
  'holders', //
]
