import { Pair, Price, Token } from '@fragmentation/core-sdk'
import { calcTokenPrices as TinesCalcTokenPrices, RToken } from '@fragmentation/tines'
import { convertPoolOrPairtoRPool } from './convertPoolOrPairtoRPool'
import { Pool } from '../entities/Pool'

export function calcTokenPrices<T extends Token>(
  pools: (Pool | Pair)[],
  baseToken: T
): Record<string, Price<Token, T>> {
  const map: Map<RToken, number> = TinesCalcTokenPrices(pools.map(convertPoolOrPairtoRPool), baseToken as RToken)
  const res: Record<string, Price<Token, T>> = {}
  Array.from(map.entries()).forEach(
    ([token, price]) => (res[token.address] = new Price(token as Token, baseToken, 1e18, Math.round(price * 1e18)))
  )
  return res
}
