import { wordsToPascal } from '@spare/phrasing'
import { Verse } from '@spare/verse'
import { vinylize } from '../utils/vinylize'
import { Table } from '@analys/table'
import { ACCUM } from '@analys/enum-pivot-mode'
import gulp from 'gulp'

export const vinylizeTableChips = async function () {
  /** @type {string} */ const dest = this.dest // if provided, save to dest/filename. if omitted, return vinyl buffer.
  /** @type {Table} */  const table = this.table
  /** @type {string} */ const key = this.key
  /** @type {string} */ const field = this.field
  /** @type {number} */ const mode = this.mode || ACCUM
  /** @type {string} */ const filename = this.filename || wordsToPascal([key, 'to', field]).join('')

  const chips = table.chips({ key, field, mode, objectify: false })
  const vinylBuffer = await vinylize(filename + '.js',
    `export const ${filename} = `,
    Verse.entriesAsObject(chips, {
      keyAbstract: x => '\'' + x + '\'',
      abstract: Verse.vector,
      quote: null,
    }))
  return dest
    ? vinylBuffer.pipe(gulp.dest(dest))
    : vinylBuffer
}

// x => isNumeric(x) ? '\'' + x + '\'' : x,
// x => isNumeric(x) ? +x : x.replace('\'', '\\\'')
