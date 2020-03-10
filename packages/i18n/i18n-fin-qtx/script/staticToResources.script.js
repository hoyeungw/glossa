import { NaiveCsv } from 'naivecsv'
import { promises as fsp } from 'fs'
import { delogger, says } from '@spare/logger'
import { BALANCES, CASHFLOWS, ENT_VALUES, INCOMES } from '@glossa/enum-fin'
import { Table } from '@analys/table'
import { bannerReplacer } from '@glossa/raw-fin-ntes/src/bannerReplacer'
import { camelToLowerDashed } from '@spare/string'

({ cwd: process.cwd(), dir: __dirname, file: __filename }) |> delogger

const SecToReport = {
  '1': ENT_VALUES,
  '2': BALANCES,
  '3': INCOMES,
  '4': CASHFLOWS
}

const script = async () => {
  const csv = await fsp.readFile(__dirname + '/../static/qtx.chs.eng.csv')
  const rawTable = await NaiveCsv.toTable(csv) |> Table.from
  for (let secKey in SecToReport) {
    const title = SecToReport[secKey]
    const secTable = rawTable
      .filter({ field: 'sec', filter: x => x.startsWith(secKey) }, { mutate: false })
      .mutateColumn('chs', bannerReplacer)
      .mutateColumn('eng', x => camelToLowerDashed(x, ' '))
    const entries = secTable.select(['chs', 'eng']).rows
    const result = `export const ${title} = ${JSON.stringify(entries, null, '  ')}`
    await fsp.writeFile(`${__dirname}/../resources/${title}.js`, result)
    says[title]('saved')
  }
}

script().then()

