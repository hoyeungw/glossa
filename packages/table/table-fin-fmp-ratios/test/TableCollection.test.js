import { decoTable, logger } from '@spare/logger'
import { TableCollection }   from '../index'

export const test = () => {
  TableCollection['valuation'] |> decoTable |> logger
}

test()
