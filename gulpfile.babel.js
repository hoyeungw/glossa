import gulp                     from 'gulp'
import { checkOverlap }         from './gulp/tasks/fin-sectors/gulpfile.check.overlap'
import { buildShenwan }         from './gulp/tasks/fin-sectors/shenwan/gulpfile.index'
import { buildSinaAndConcepts } from './gulp/tasks/fin-sectors/sina/gulpfile.index'
import { buildTush }            from './gulp/tasks/fin-sectors/tush/gulpfile.prep.tush'
import { buildHs300 }           from './gulp/tasks/index/hs300/gulpfile.prep.hs300'
import { buildSSE }             from './gulp/tasks/index/sse/gulpfile.prep.sse'
import { convertShenwan }       from './gulp/tasks/primitive/gulpfile.convert.shenwan'
import {buildNtesTranslation}   from './gulp/tasks/fin-reports/gulpfile.ntes.translation'

export {
  buildSSE,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
  checkOverlap,
  convertShenwan,
  buildNtesTranslation
}

export default gulp.series(
  buildSSE,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
)
