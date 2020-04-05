import gulp from 'gulp'
import { initC12ns } from '@glossa/index-fin-sse'
import { Vinylize } from '@flua/vinylize'
import { Verse } from '@spare/verse'
import { esvar } from '@flua/utils'
import { DecoPale } from '@spare/deco-pale'

const DEST = 'packages/index/index-fin-sse/static'

const makeTable = async () => {
  const table = await initC12ns()
  Vinylize('c12ns.js')
    .p(esvar('c12ns'))
    .p(Verse.table(table, { read: DecoPale({ loose: false }) }))
    .pipe(gulp.dest(DEST))
}

export const buildSSE = gulp.series(
  makeTable
)
