import gulp from 'gulp'
import { buildSSE } from './gulp/tasks/index/sse/gulpfile.prep.sse'
import { buildHs300 } from './gulp/tasks/index/hs300/gulpfile.prep.hs300'
import { buildShenwan } from './gulp/tasks/fin/shenwan/gulpfile.index'
import { buildSinaAndConcepts } from './gulp/tasks/fin/sinaAndConcepts/gulpfile.index'
import { buildTush } from './gulp/tasks/fin/tush/gulpfile.prep.tush'
import { checkOverlap } from './gulp/tasks/fin/gulpfile.check.overlap'
import { convertShenwan } from './gulp/tasks/primitive/gulpfile.convert.shenwan'

export {
  buildSSE,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
  checkOverlap,
  convertShenwan,
}

export default gulp.series(
  buildSSE,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
)
