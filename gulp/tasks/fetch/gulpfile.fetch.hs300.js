import gulp from 'gulp'
import source from 'vinyl-source-stream'
import vinylBuffer from 'vinyl-buffer'
import size from 'gulp-size'
import { deco, DecoTable, says } from '@spare/logger'
import { Table } from '@analys/table'
import { TABLE } from '@analys/enum-tabular-types'
import { HS300, insightHS300 } from '@repsi/index-fin-hs300'

const BASE = 'packages/index/index-fin-hs300'
const RAW = 'IndexHS300.json'
const SRC = BASE + '/static'


export const fetch = async () => {
  const table = await HS300
    .indexes({ format: TABLE })
    .then(table => {
        (table = Table.from(table)) |> DecoTable({ top: 3, bottom: 2 }) |> says['fetched table']
        insightHS300(table) |> deco |> says['fetched table']
        return table
      }
    )
  const stream = source(RAW)
  stream.write(JSON.stringify(table)) // write the file contents value the stream
  await stream.end()
  return stream
    .pipe(vinylBuffer())
    .pipe(size({ title: RAW }))
    .pipe(gulp.dest(SRC))
}
