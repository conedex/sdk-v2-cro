import {
  Avalanche,
  Binance,
  Celo,
  Ether,
  Fantom,
  Fuse,
  Glmr,
  Harmony,
  Heco,
  Kava,
  Matic,
  Movr,
  Okex,
  Palm,
  Telos,
  xDai,
  Metis,
  Boba,
  Cronos,
} from '../entities/Native'

import { ChainId } from '../enums'
import { NativeMap } from '../types'

export const NATIVE: NativeMap = {
  [ChainId.ETHEREUM]: Ether.onChain(ChainId.ETHEREUM),
  [ChainId.ROPSTEN]: Ether.onChain(ChainId.ROPSTEN),
  [ChainId.RINKEBY]: Ether.onChain(ChainId.RINKEBY),
  [ChainId.GÖRLI]: Ether.onChain(ChainId.GÖRLI),
  [ChainId.KOVAN]: Ether.onChain(ChainId.KOVAN),
  [ChainId.FANTOM]: Fantom.onChain(ChainId.FANTOM),
  [ChainId.FANTOM_TESTNET]: Fantom.onChain(ChainId.FANTOM_TESTNET),
  [ChainId.MATIC]: Matic.onChain(ChainId.MATIC),
  [ChainId.MATIC_TESTNET]: Matic.onChain(ChainId.MATIC_TESTNET),
  [ChainId.XDAI]: xDai.onChain(ChainId.XDAI),
  [ChainId.BSC]: Binance.onChain(ChainId.BSC),
  [ChainId.BSC_TESTNET]: Binance.onChain(ChainId.BSC_TESTNET),
  // [ChainId.MOONBEAM_TESTNET]: Currency.GLMR,
  [ChainId.ARBITRUM]: Ether.onChain(ChainId.ARBITRUM),
  [ChainId.ARBITRUM_TESTNET]: Ether.onChain(ChainId.ARBITRUM_TESTNET),
  [ChainId.AVALANCHE]: Avalanche.onChain(ChainId.AVALANCHE),
  [ChainId.AVALANCHE_TESTNET]: Avalanche.onChain(ChainId.AVALANCHE_TESTNET),
  [ChainId.HECO]: Heco.onChain(ChainId.HECO),
  [ChainId.HECO_TESTNET]: Heco.onChain(ChainId.HECO_TESTNET),
  [ChainId.HARMONY]: Harmony.onChain(ChainId.HARMONY),
  [ChainId.HARMONY_TESTNET]: Harmony.onChain(ChainId.HARMONY_TESTNET),
  [ChainId.OKEX]: Okex.onChain(ChainId.OKEX),
  [ChainId.OKEX_TESTNET]: Okex.onChain(ChainId.OKEX_TESTNET),
  [ChainId.CELO]: Celo.onChain(ChainId.CELO),
  [ChainId.PALM]: Palm.onChain(ChainId.PALM),
  [ChainId.MOONRIVER]: Movr.onChain(ChainId.MOONRIVER),
  [ChainId.FUSE]: Fuse.onChain(ChainId.FUSE),
  [ChainId.TELOS]: Telos.onChain(ChainId.TELOS),
  [ChainId.MOONBEAM]: Glmr.onChain(ChainId.MOONBEAM),
  [ChainId.OPTIMISM]: Ether.onChain(ChainId.OPTIMISM),
  [ChainId.KAVA]: Kava.onChain(ChainId.KAVA),
  [ChainId.METIS]: Metis.onChain(ChainId.METIS),
  [ChainId.ARBITRUM_NOVA]: Ether.onChain(ChainId.ARBITRUM_NOVA),
  [ChainId.BOBA_AVAX]: Boba.onChain(ChainId.BOBA_AVAX),
  [ChainId.CRONOS]: Cronos.onChain(ChainId.CRONOS),
  [ChainId.CRONOS_TESTNET]: Cronos.onChain(ChainId.CRONOS_TESTNET),
}
