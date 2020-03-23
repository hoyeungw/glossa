import { inferType, isNumeric } from '@typen/num-strict'
import { quote } from '@spare/quote'
import { BOO, NUM, STR } from '@typen/enum-data-types'
import { ARRAY } from '@typen/enum-object-types'
import { Verse } from '@spare/verse'

export const quoteString = x => quote(x.replace(/'/g, '\\\''))
export const decoKey = x => (/\W/.test(x) || isNumeric(x)) ? quoteString(x) : x

export function readValue (x) {
  if (x === void 0 || x === null) return x
  const t = inferType(x)
  if (t === BOO) return x
  if (t === NUM || t === STR) return quoteString(x.toString())
  if (t === ARRAY) return Verse.vector(x, { read: quoteString })
  return quoteString(x.toString())
}

export const makeVerseConfig = () => {
  return {
    objectify: true,
    read: readValue,
    keyRead: readValue
  }
}
export const VERSE_CONFIG = {
  objectify: true,
  read: readValue,
  keyRead: readValue
}
