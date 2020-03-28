import { makeReplaceable } from '@glossa/translator'

const LEXICON = [
  [/\s+/g, ''],
  [/\(.*?\)/g, ''],
  [/(、)|：|:|\(/g, '_']
] |> makeReplaceable

export const cleanBanner = tx => String(tx).replace(LEXICON, x => x.trim())

// export const bannerReplacer = tx => String(tx)
//   .replace(/( )|\(.*?\)/g, '')
//   .replace(/(、)|：|:|\(/g, '_')
//   .trim()