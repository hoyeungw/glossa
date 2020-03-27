import { makeReplaceable } from '@glossa/translator'
import { wordToCap } from '@spare/phrasing'
import { SP } from '@spare/enum-chars'

const EXIST_SMALL = /[a-z]/
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

const wordsToInitialCapital = phrase => {
  let ms, wd, ph = ''
  while ((ms = WORD.exec(phrase)) && ([wd] = ms)) ph += SP + (wd |> wordToCap)
  return ph.trim()
}

const wordsToSmooth = phrase => {
  let ms, wd, ph = ''
  while ((ms = WORD.exec(phrase)) && ([wd] = ms)) ph += SP + wd
  return ph.trim()
}

export const cleanEng = phrase => {
  const words = !EXIST_SMALL.test(phrase)
    ? wordsToInitialCapital(phrase)
    : wordsToSmooth(phrase)
  return words.replace(LEXICON, x => x.trim())
}
