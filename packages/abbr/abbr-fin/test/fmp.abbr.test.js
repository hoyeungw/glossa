import { BALANCES, CASHFLOWS, ENT_VALUES, INCOMES } from '@glossa/enum-fin'
import { Raw }                                      from '@glossa/raw-fin-fmp'
import { decoSamples, says }                        from '@spare/logger'
import { snakeToPascal }                            from '@spare/phrasing'
import { Translator }                               from '@spare/translator'
import { mapper }                                   from '@vect/vector-mapper'
import { Abbr }                                     from '../src/abbr'

for (let topic of [
  BALANCES, INCOMES, CASHFLOWS, ENT_VALUES
]) {
  const words = Raw[topic]
  const abbreviator = Translator.build(Abbr(topic))
  const samples = mapper(words, raw => ({
    abbr: abbreviator.parse(raw, snakeToPascal).trim(), //.replace(/\s+/g, ''),
    raw
  }))
  samples |> decoSamples |> says[topic]
}


