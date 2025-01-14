const { sumTokensExport } = require('../helper/unknownTokens')
const WETH = '0x4300000000000000000000000000000000000004'
const BLNYAN = '0x9aAC39ca368D27bf03887CCe32f28b44F466072F'
const BLNYAN_WETH_SLP = '0x0E9309f32881899F6D4aC2711c6E21367A84CA26'

const stakingBLNYANContract = '0xA76D6dc805d0EbEcb3787c781ce3A18feEF020cb'
const feeDistro = '0xBC8a7a845cC7A8246EB34856Afe6f1a3d62BD9C6'
const stakeLpEarnWeth = '0x0a3A757BE3049C2d9444d025E98D37b2a81a0a32'
const button = '0x00066Ed6c2F7d6CC6e66c678BaEE2C8683B632e6'
const opts = { useDefaultCoreAssets: true, lps: [BLNYAN_WETH_SLP] }

module.exports = {
  misrepresentedTokens: true,
  blast: {
    tvl: sumTokensExport({ owners: [stakeLpEarnWeth, feeDistro, button], tokens: [WETH], ...opts, }),
    pool2: sumTokensExport({ ...opts, owners: [stakeLpEarnWeth], tokens: [BLNYAN_WETH_SLP], }),
    staking: sumTokensExport({ owners: [stakingBLNYANContract], tokens: [BLNYAN], ...opts, }),
  },
  methodology:
    'Counts as TVL the ETH only. blNYAN and LP assets deposited are counted as Pool2 and staking Respectively',
}
