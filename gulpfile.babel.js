import gulp from 'gulp'
import { buildHs300 } from './gulp/tasks/fin-c12n/gulpfile.prep.hs300'
import { buildShenwan } from './gulp/tasks/fin-c12n/gulpfile.prep.shenwan'
import { buildSina } from './gulp/tasks/fin-c12n/gulpfile.prep.sina'
import { buildConcepts } from './gulp/tasks/fin-c12n/gulpfile.prep.concepts'
import { buildTush } from './gulp/tasks/fin-c12n/gulpfile.prep.tush'

export {
  buildHs300,
  buildSina,
  buildShenwan,
  buildConcepts,
  buildTush
}

export default gulp.series(
  buildHs300,
  buildSina,
  buildShenwan,
  buildConcepts,
  buildTush
)
