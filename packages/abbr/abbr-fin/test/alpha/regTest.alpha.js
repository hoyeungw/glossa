import { delogger } from '@spare/logger'

const REG = / ?receiv(?:e|ables?)/gi

const candidates = [
  ' receive',
  'receive',
  'receivable',
  'receivables'
]

for (let word of candidates) {
  word.replace(REG, 'foo') |> delogger
}
