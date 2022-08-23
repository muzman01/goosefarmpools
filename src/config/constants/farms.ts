import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BLN-BUSD LP',
    lpAddresses: {
      97: '0xe8Bd519E5F3666a41555dDFDBbc07D243560f5A0',
      56: '0xE1C36A7d673A761a42D045BC2466523f5d7Fe79c',
    },
    tokenSymbol: 'BLN',
    tokenAddresses: {
      97: '0xB5A985295cc109DE7e836cB6850D49aBC7781f8f',
      56: '0xE90334c19c798C3A18d81b8cd16594247D5B19dd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BLN-BNB LP',
    lpAddresses: {
      97: '0xD085E1e2062Ab6661BB4AC5a1775C4620F9d639e',
      56: '0xd89e85cea97f642e7e0A6487acDE8c1436ad8017',
    },
    tokenSymbol: 'BLN',
    tokenAddresses: {
      97: '0xB5A985295cc109DE7e836cB6850D49aBC7781f8f',
      56: '0xE90334c19c798C3A18d81b8cd16594247D5B19dd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xD085E1e2062Ab6661BB4AC5a1775C4620F9d639e',
      56: '0x4642F15aA6C5d3cBD38F1cd6F019558B626bB3aC',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xB5A985295cc109DE7e836cB6850D49aBC7781f8f',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'BLN',
    lpAddresses: {
      97: '0xe8Bd519E5F3666a41555dDFDBbc07D243560f5A0',
      56: '0xE1C36A7d673A761a42D045BC2466523f5d7Fe79c', // CAKE-BUSD LP
    },
    tokenSymbol: 'BLN',
    tokenAddresses: {
      97: '0xB5A985295cc109DE7e836cB6850D49aBC7781f8f',
      56: '0xE90334c19c798C3A18d81b8cd16594247D5B19dd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms
