import gulp from 'gulp'
import { buildHs300 } from './gulp/tasks/fin-c12n/gulpfile.prep.hs300'
import { buildShenwan } from './gulp/tasks/fin-c12n/gulpfile.prep.shenwan'
import { buildShenwanOfficial } from './gulp/tasks/fin-c12n/gulpfile.prep.shenwan.official'
import { buildSina } from './gulp/tasks/fin-c12n/gulpfile.prep.sina'
import { buildConcepts } from './gulp/tasks/fin-c12n/gulpfile.prep.concepts'
import { buildTush } from './gulp/tasks/fin-c12n/gulpfile.prep.tush'
import { checkOverlap } from './gulp/tasks/fin-c12n/gulpfile.check.overlap'
import { convertShenwan } from './gulp/tasks/primitive/gulpfile.convert.shenwan'

export {
  buildHs300,
  buildSina,
  buildShenwan,
  buildConcepts,
  buildTush,
  checkOverlap,
  convertShenwan,
  buildShenwanOfficial
}

export default gulp.series(
  buildSina,
  buildConcepts,
  buildTush,
  buildShenwan,
  buildHs300,
)
