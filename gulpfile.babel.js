import gulp from 'gulp'
import { buildC12nFin } from './gulp/tasks/fin/c12n-fin/gulpfile.c12n.fin'
import { buildHs300 } from './gulp/tasks/fin/hs300/gulpfile.prep.hs300'
import { buildShenwan } from './gulp/tasks/fin/shenwan/gulpfile.index'
import { buildSinaAndConcepts } from './gulp/tasks/fin/sinaAndConcepts/gulpfile.index'
import { buildTush } from './gulp/tasks/fin/tush/gulpfile.prep.tush'
import { checkOverlap } from './gulp/tasks/fin/gulpfile.check.overlap'
import { convertShenwan } from './gulp/tasks/primitive/gulpfile.convert.shenwan'

export {
  buildC12nFin,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
  checkOverlap,
  convertShenwan,
}

export default gulp.series(
  buildC12nFin,
  buildTush,
  buildSinaAndConcepts,
  buildShenwan,
  buildHs300,
)
