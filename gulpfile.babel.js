import gulp                               from 'gulp'
import { checkOverlap }                   from './gulp/tasks/c12n/gulpfile.check.overlap'
import { buildShenwan }                   from './gulp/tasks/c12n/shenwan/gulpfile.index'
import { buildSinaAndConcepts }           from './gulp/tasks/c12n/sina/gulpfile.index'
import { buildTush }                      from './gulp/tasks/c12n/tush/gulpfile.prep.tush'
import { buildHs300 }                     from './gulp/tasks/index/hs300/gulpfile.prep.hs300'
import { buildSSE }                       from './gulp/tasks/index/sse/gulpfile.prep.sse'
import { convertShenwan }                 from './gulp/tasks/postcrawl/gulpfile.convert.shenwan'
import { buildTable as buildFinFmpTable } from './gulp/tasks/table/gulpfile.buildFinFmpTable'
import { buildFinNtesTable }              from './gulp/tasks/table/gulpfile.buildFinNtesTable'

export {
  buildSSE,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
  checkOverlap,
  convertShenwan,
  buildFinNtesTable,
  buildFinFmpTable
}

export default gulp.series(
  buildSSE,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
)
