import { COLF }                from '@spare/enum-chars'
import { DecoEntries, logger } from '@spare/logger'
import { quote }               from '@spare/quote'

const vec = [
  'date',
  'ast',
  'curAst',
  'ncurAst',
  'liab',
  'curLiab',
  'ncurLiab',
  'eqt',
  'invt',
  'monetCap',
  'tFa',
  'accRecv',
  'fxAst',
  'intgAst',
  'gdw',
  'rev',
  'opCosts',
  'opPft',
  'saExp',
  'mangExp',
  'finExp',
  'intrExp',
  'rdExp',
  'pft',
  'netInc',
  'eps',
  'marketCap',
]

vec.map(it => [it.toUpperCase(), quote(it)])  |> DecoEntries({ dash: ' = ', delim: COLF }) |> logger
