import { deca, deco, logger } from '@spare/logger'
import TABLE from '../../../c12n/c12n-fin-shenwan/static/Sectors'
import { FinInsight } from '../src/FinInsight'

FinInsight.sectorInsight(TABLE) |> deco|> logger
