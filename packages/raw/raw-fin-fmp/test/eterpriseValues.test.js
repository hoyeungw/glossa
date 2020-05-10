import { DictCollection }   from '@glossa/abbr-fin'
import { delogger }         from '@spare/logger'
import { snakeToCamel }     from '@spare/phrasing'
import { enterpriseValues } from '../index'

const lex = DictCollection.enterpriseValues

for (let key of enterpriseValues) {
  `[${key}] (${key.replace(lex, snakeToCamel)})` |> delogger
}
