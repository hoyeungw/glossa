import { Abbr } from '../src/abbr'
import { Translator } from '@glossa/translator'
import { Raw } from '@glossa/raw-fin-ntes'
import { ChsToEng } from '@glossa/i18n-fin-ntes'
import { decoSamples, says } from '@spare/logger'
import { mapper } from '@vect/vector-mapper'
import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'

for (let topic of [
  BALANCES, INCOMES, CASHFLOWS, BASICS
]) {
  const words = Raw[topic]
  const translator = Translator.build(ChsToEng[topic])
  const abbreviator = Translator.build(Abbr(topic))
  const samples = mapper(words, raw => {
    const translated = translator.parse(raw)
    let abbreviated = abbreviator.parse(translated).trim().toLowerCase()
    if (abbreviated.length > 24) abbreviated = abbreviated.split(' ').map(([c]) => c).join('')
    return { abbreviated, translated, raw }
  })
  samples |> decoSamples |> says[topic]
}


