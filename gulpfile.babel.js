import gulp from 'gulp'
import { buildHs300 } from './gulp/tasks/gulpfile.prep.hs300'
import { buildShenwan } from './gulp/tasks/gulpfile.prep.shenwan'
import { buildSina } from './gulp/tasks/gulpfile.prep.sina'
import { buildConcepts } from './gulp/tasks/gulpfile.prep.concepts'
import { buildAreas } from './gulp/tasks/gulpfile.prep.areas'

export {
  buildHs300,
  buildSina,
  buildShenwan,
  buildConcepts,
  buildAreas
}

export default gulp.series(
  buildHs300,
  buildSina,
  buildShenwan,
  buildConcepts,
  buildAreas
)
