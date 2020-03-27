import { c12ns } from './c12ns.hs300'
import { tableToSamples } from '@analys/convert'
import { decoSamples, logger } from '@spare/logger'
import { cleanEng } from '../../src/cleanEng'

const samples = c12ns |> tableToSamples

export const testScript = () => samples.map(({ symbol, eng }) => {
  return ({ symbol, value: cleanEng(eng), eng })
})
  |> decoSamples
  |> logger
testScript()
