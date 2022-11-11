const { cexExports } = require('../helper/cex')

const config = {
  bitcoin: {
    geckoId: 'bitcoin',
    // from https://insights.deribit.com/exchange-updates/deribit-wallet-holdings/
    addresses: [
        "bc1qa3phj5uhnuauk6r62cku6r6fl9rawqx4n6d690",
        "bc1qtq5zfllw9fs9w6stnfgalf9v59fgrcxxyawuvm",
        "1MDq7zyLw6oKichbFiDDZ3aaK59byc6CT8",
        "1932eKraQ3Ad9MeNBHb14WFQbNrLaKeEpT",
        "13JJ1nxDeX5fMsDeyGHiLoK8rF2ayGq1cX",
        "1MdrdcEzfiJdvs6eVSwUx6bWboPX8if5U3",
        "35WHp4Hid61peyH4tuhNunwRj2gtNB41Lo",
    ],
    noParallel: true,
  },
  ethereum:{
    owners: [
        "0x77021d475E36b3ab1921a0e3A8380f069d3263de",
        "0x5f397B62502e255f68382791947D54C4B2d37F09",
        "0xcfee6efec3471874022e205f4894733c42cbbf64",
        "0x2eeD6a08Fb89a5CD111efA33f8DcA46CfbEB370f",
        "0x6B378bE3c9642ccF25b1A27faCb8ace24aC34A12",
        "0xA7e15eF7C01B58eBe5eF74Aa73625Ae4b11FE754",
        "0x062448f804191128d71fc72e10a1d13bd7308e7e",
        "0xA0F6121319a34f24653fB82aDdC8dD268Af5b9e1",
        "0x904cC2B2694FFa78F04708D6F7dE205108213126"
    ]
  },
  solana: {
    owners:[
        "H8z2yZcrKo7ngiMz3Vsuw823nYo11qdCqs3sJDDjeTdD",
        "A5ANHizfayJUDBSwV5Cm7CNXCj6E6AAda49wzzdYPons"
    ]
  }
}


module.exports = cexExports(config)