import { C12nShenwan } from '../src/C12nShenwan'
import { Vinylize } from '@flua/vinylize'
import gulp from 'gulp'

const BASE = 'packages/c12n/c12n-fin-shenwan'
const DEST = 'static'
const FILENAME = 'SectorsTush'

const downloadAsJson = async () => {
  const table = await C12nShenwan.sectorsByTush()
  Vinylize(FILENAME + '.json')
    .p(JSON.stringify(table))
    .pipe(gulp.dest(BASE + '/' + DEST))
}
downloadAsJson().then()
