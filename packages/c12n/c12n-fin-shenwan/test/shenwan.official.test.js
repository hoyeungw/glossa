import gulp from 'gulp'
import { Vinylize } from '@flua/vinylize'
import { esvar } from '@flua/utils'
import { Verse } from '@spare/verse'
import { C12nShenwan } from '../src/C12nShenwan'
import { SHENWAN_BASEURL } from '../src/assets/SHENWAN_BASEURL'
import { says } from '@palett/says'
import { DecoTable } from '@spare/logger'
import { SYMBOL } from '@glossa/enum-fin'
import { DecoPale } from '@spare/deco-pale'
import { quote } from '@spare/quote'
import { Table } from '@analys/table'

const BASE = 'packages/c12n/c12n-fin-shenwan'
const DEST = 'static'
const FILENAME = 'SectorsOfficial'

const downloadAsJson = async () => {
  const table = await C12nShenwan.sectorsOfficial()
  Vinylize(FILENAME + '.json')
    .p(JSON.stringify(table))
    .pipe(gulp.dest(BASE + '/' + DEST))
}
const downloadAsJs = async () => {
  const table = await C12nShenwan.sectorsOfficial()
  table |> DecoTable({ top: 16, bottom: 16, fullAngle: true }) |> says[SHENWAN_BASEURL]
  Table.from(table).mutateColumn(SYMBOL, quote)
  Vinylize(FILENAME + '.js')
    .p(esvar(FILENAME))
    .p(Verse.table(table, { read: DecoPale({ loose: true }) }))
    .pipe(gulp.dest(BASE + '/' + DEST))
}

downloadAsJson().then()
