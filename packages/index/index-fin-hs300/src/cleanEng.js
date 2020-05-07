import { SP }              from '@spare/enum-chars'
import { capitalize }      from '@spare/phrasing'
import { makeReplaceable } from '@spare/translator'

const SMALL = /[a-z]/
const WORD = /[A-Za-z\d-.']+|&/g
const LEXICON = [
  [/GUANGDONGWENSFOODSTUFFGROUPCO/i, 'Guangdong Wens Food Stuff Group Co'],
  [/Pharmaceutical/gi, 'Pharm'],
  [/Information/gi, 'Info'],
  [/Technology/gi, 'Tech'],
  [/Science/gi, 'Sci'],
  [/Limited/gi, 'Ltd'],
  [/Corporation/gi, 'Corp'],
  [/Company (of China)/gi, (wd, p1) => p1 ? p1 : 'Co '],
  [/High(\s*(&|and)?\s*New)?/gi, 'Hi'],
  [/(Plc|Inc)\.?/gi, ''],
  [/\b(\w)\s*&\s*(\w)\b/gi, (_, l, r) => l + '&' + r],
  [/\bOf\b/gi, 'of'],
  [/\s+/i, ' '],
  [/\band\b/gi, '&'],
  [/Ltd[.,\s]+Co\.?/, ''],
  [/(Co)?[.,\s]+Ltd\.?/i, '']
] |> makeReplaceable

const wordsToCapitalize = phrase => {
  let ms, wd, ph = ''
  while ((ms = WORD.exec(phrase)) && ([wd] = ms)) ph += SP + capitalize(wd)
  return ph.trim()
}

const wordsToSmooth = phrase => {
  let ms, wd, ph = ''
  while ((ms = WORD.exec(phrase)) && ([wd] = ms)) ph += SP + wd
  return ph.trim()
}

export const cleanEng = phrase => {
  const words = !SMALL.test(phrase)
    ? wordsToCapitalize(phrase)
    : wordsToSmooth(phrase)
  return words.replace(LEXICON, x => x.trim())
}
