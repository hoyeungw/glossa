import { basics }                                 from '../resources/basics'
import { DecoEntries, decoEntries, logger, says } from '@spare/logger'

basics |> DecoEntries({}) |> says['basics']

for (let [k, v] of basics) {
  v.toLowerCase() |> logger
}
