import { Abbr } from '../src/abbr'
import { Translator } from '@glossa/translator'
import { Raw } from '@glossa/raw-fin-fmp'
import { decoSamples, says } from '@spare/logger'
import { mapper } from '@vect/vector-mapper'
import { BALANCES, CASHFLOWS, ENT_VALUES, INCOMES } from '@glossa/enum-fin'

for (let topic of [
  BALANCES, INCOMES, CASHFLOWS, ENT_VALUES
]) {
  const words = Raw[topic]
  const abbreviator = Translator.build(Abbr(topic))
  const samples = mapper(words, raw => ({ abbr: abbreviator.parse(raw).trim().toLowerCase(), raw }))
  samples |> decoSamples |> says[topic]
}


