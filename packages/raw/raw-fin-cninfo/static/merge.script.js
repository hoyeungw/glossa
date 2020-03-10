import fs from 'fs'
import { NaiveCsv } from 'naivecsv'
import { JoinT, TabQ, TabX } from 'crostab'
import { Mx } from 'veho'

const folder = './src/modules/Econ/fin-cn/assets/translation/raw'

export const merge = () => {
  const tables = ['balance', 'income', 'cashflow', 'ratio']
  const identifier = 'def.cninfo'
  for (let table of tables) {
    table |> console.log
    const [fileL, fileR] = [`${table}.${identifier}.cn.csv`, `${table}.${identifier}.en.csv`]
    const [dataL, dataR] = [
      fs.readFileSync(`${folder}/cn/${fileL}`, 'utf8'),
      fs.readFileSync(`${folder}/en/${fileR}`, 'utf8')
    ]
    const [tableL, tableR] = [
      NaiveCsv.toTable(dataL, { qt: '"', popBlank: true }),
      NaiveCsv.toTable(dataR, { qt: '"', popBlank: true })
    ]
    const ob = {
      zh: tableL.select(['中文名称', '说明'], { mutate: false }).matrix,
      en: tableR.select(['中文名称', '说明'], { mutate: false }).matrix
    }
    tableL |> (_ => TabX.brief(_, { rows: { head: 5, tail: 2 }, chinese: true, visual: { on: false } })) |> console.log
    tableR |> (_ => TabX.brief(_, { rows: { head: 5, tail: 2 }, chinese: true, visual: { on: false } })) |> console.log
    const ob2 = {
      zh: tableL.column('中文名称'),
      en: tableR.column('中文名称')
    }
    fs.writeFile(`${folder}/out/zh.des/${table}.${identifier}.json`,
      JSON.stringify(ob),
      'utf8',
      err => err |> console.log)
    fs.writeFile(`${folder}/out/zh/${table}.${identifier}.json`,
      JSON.stringify(ob2),
      'utf8',
      err => err |> console.log)
  }
}

describe('merge ', function () {
  this.timeout(1000 * 60)
  it('merge : test', () => {
    merge()
  })
})
