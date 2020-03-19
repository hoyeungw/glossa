import gulp from 'gulp'
import { Verse } from '@spare/verse'
import { wordsToPascal } from '@spare/phrasing'
import { inferType, isNumeric } from '@typen/num-strict'
import { vinylize } from '../utils/vinylize'
import { NUM, STR } from '@typen/enum-data-types'
import { ARRAY } from '@typen/enum-object-types'

export const vinylizeTableLookup = async function () {
  /** @type {string} */ const dest = this.dest // if provided, save to dest/filename. if omitted, return vinyl buffer.
  /** @type {Table} */  const table = this.table
  /** @type {string} */ const key = this.key
  /** @type {string} */ const field = this.field
  /** @type {string} */ const filename = this.filename || wordsToPascal([key, 'to', field]).join('')

  const entries = table.lookupTable(key, field, false)
  const vinylBuffer = await vinylize(
    filename + '.js',
    `export const ${filename} = `,
    Verse.entriesAsObject(entries, {
      keyAbstract: x => isNumeric(x) ? '\'' + x + '\'' : x,
      abstract: x => {
        const t = inferType(x)
        if (t === NUM) return +x
        if (t === STR) return '\'' + x.replace('\'', '\\\'') + '\''
        if (t === ARRAY) return x.length ? Verse.vector(x) : '[]'
        return String(x)
      },
      quote: false
    }))
  return dest
    ? vinylBuffer.pipe(gulp.dest(dest))
    : vinylBuffer
}
