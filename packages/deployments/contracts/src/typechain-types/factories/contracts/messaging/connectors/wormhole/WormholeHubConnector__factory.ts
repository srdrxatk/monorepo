/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  WormholeHubConnector,
  WormholeHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/wormhole/WormholeHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_mirrorWormholeChainId",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "updated",
        type: "address",
      },
    ],
    name: "RefundAddressUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "AMB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_WORMHOLE_ID",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorConnector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedWhMessages",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
    ],
    name: "quoteEVMDeliveryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "_sourceAddress",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "_sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_deliveryHash",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    name: "setGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updated",
        type: "address",
      },
    ],
    name: "setRefundAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001c2b38038062001c2b83398101604081905262000035916200039b565b818181898989898984848484846200004d33620001b3565b8463ffffffff16600003620000985760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e45760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008f565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011c576200011c8162000218565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a3505050505050505050506200018f816200028160201b60201c565b5061ffff811661010052620001a433620002c2565b50505050505050505062000431565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b6005546001600160a01b03908116908216036200030d5760405162461bcd60e51b81526020600482015260086024820152670858da185b99d95960c21b60448201526064016200008f565b6005546040516001600160a01b038084169216907f57b5839c3435f5b2eb2d2e286fb44ca7303d01d9b25a5d9c05c489523474285990600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b805163ffffffff811681146200037e57600080fd5b919050565b80516001600160a01b03811681146200037e57600080fd5b600080600080600080600060e0888a031215620003b757600080fd5b620003c28862000369565b9650620003d26020890162000369565b9550620003e26040890162000383565b9450620003f26060890162000383565b9350620004026080890162000383565b925060a0880151915060c088015161ffff811681146200042157600080fd5b8091505092959891949750929550565b60805160a05160c05160e05161010051611776620004b5600039600081816102af0152818161065501528181610bab01526112130152600081816102040152610db60152600081816103c5015281816105980152610d8f01526000818161051401528181610701015281816107a20152610b460152600061037101526117766000f3fe6080604052600436106101855760003560e01c80635f61e3ec116100d1578063b1f8100d1161008a578063d1851c9211610064578063d1851c92146104c5578063d232c220146104e3578063d69f9d6114610502578063db1b76591461053657600080fd5b8063b1f8100d14610470578063c5b350df14610490578063cc394283146104a557600080fd5b80635f61e3ec146103b357806368742da6146103e75780636a42b8f814610407578063715018a61461041d5780637850b020146104325780638da5cb5b1461045257600080fd5b80633cf52ffb1161013e5780634ff746f6116101185780634ff746f61461032c578063529dca321461034c57806352a9674b1461035f5780635bd11efc1461039357600080fd5b80633cf52ffb146102e457806348e6fa23146102f95780634d93538b1461030c57600080fd5b8063047dbeb8146101915780630cb61f6c146101ba57806314168416146101f257806315b75bea1461023b57806318c817091461025d578063194ea9961461029d57600080fd5b3661018c57005b600080fd5b34801561019d57600080fd5b506101a760045481565b6040519081526020015b60405180910390f35b3480156101c657600080fd5b506005546101da906001600160a01b031681565b6040516001600160a01b0390911681526020016101b1565b3480156101fe57600080fd5b506102267f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101b1565b34801561024757600080fd5b5061025b6102563660046112b0565b610556565b005b34801561026957600080fd5b5061028d6102783660046112d2565b60066020526000908152604090205460ff1681565b60405190151581526020016101b1565b3480156102a957600080fd5b506102d17f000000000000000000000000000000000000000000000000000000000000000081565b60405161ffff90911681526020016101b1565b3480156102f057600080fd5b506002546101a7565b61025b6103073660046113a2565b61058d565b34801561031857600080fd5b506101a7610327366004611406565b610642565b34801561033857600080fd5b5061025b610347366004611432565b6106f6565b61025b61035a366004611481565b61079c565b34801561036b57600080fd5b506102267f000000000000000000000000000000000000000000000000000000000000000081565b34801561039f57600080fd5b5061025b6103ae3660046112b0565b6107e0565b3480156103bf57600080fd5b506101da7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103f357600080fd5b5061025b6104023660046112b0565b610814565b34801561041357600080fd5b5062093a806101a7565b34801561042957600080fd5b5061025b610891565b34801561043e57600080fd5b5061025b61044d3660046112d2565b610945565b34801561045e57600080fd5b506000546001600160a01b03166101da565b34801561047c57600080fd5b5061025b61048b3660046112b0565b610979565b34801561049c57600080fd5b5061025b610a17565b3480156104b157600080fd5b506003546101da906001600160a01b031681565b3480156104d157600080fd5b506001546001600160a01b03166101da565b3480156104ef57600080fd5b506000546001600160a01b03161561028d565b34801561050e57600080fd5b506101da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561054257600080fd5b5061028d6105513660046112b0565b610a87565b6000546001600160a01b03163314610581576040516311a8a1bb60e31b815260040160405180910390fd5b61058a81610a98565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105f95760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6106038282610b3d565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e9355077828233604051610636939291906115d0565b60405180910390a15050565b6000816001600160a01b031663c23ee3c37f0000000000000000000000000000000000000000000000000000000000000000600061067f87610b7a565b6040516001600160e01b031960e086901b16815261ffff9093166004840152602483019190915260448201526064016040805180830381865afa1580156106ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ee919061160e565b509392505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107575760405162461bcd60e51b81526004016105f09060208082526004908201526310a0a6a160e11b604082015260600190565b61076081610b90565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610791929190611632565b60405180910390a150565b6107c7827f000000000000000000000000000000000000000000000000000000000000000083610ba9565b6107d96107d384610cc3565b86610d06565b5050505050565b6000546001600160a01b0316331461080b576040516311a8a1bb60e31b815260040160405180910390fd5b61058a81610e6b565b6000546001600160a01b0316331461083f576040516311a8a1bb60e31b815260040160405180910390fd5b4761084a8282610ed4565b816001600160a01b03167feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d8260405161088591815260200190565b60405180910390a25050565b6000546001600160a01b031633146108bc576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426108ce919061165c565b116108ec576040516324e0285f60e21b815260040160405180910390fd5b60025460000361090f57604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b031615610939576040516323295ef960e01b815260040160405180910390fd5b6109436000610ff2565b565b6000546001600160a01b03163314610970576040516311a8a1bb60e31b815260040160405180910390fd5b61058a81611057565b6000546001600160a01b031633146109a4576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156109c2575060025415155b156109e0576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610a0e57604051634a2fb73f60e11b815260040160405180910390fd5b61058a81611098565b6001546001600160a01b03163314610a42576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610a54919061165c565b11610a72576040516324e0285f60e21b815260040160405180910390fd5b600154610943906001600160a01b0316610ff2565b6000610a92826110e6565b92915050565b6005546001600160a01b0390811690821603610ae15760405162461bcd60e51b81526020600482015260086024820152670858da185b99d95960c21b60448201526064016105f0565b6005546040516001600160a01b038084169216907f57b5839c3435f5b2eb2d2e286fb44ca7303d01d9b25a5d9c05c489523474285990600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b600354610b76907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b031684846110ff565b5050565b6000600454821115610b8c5760045491505b5090565b6040516316c2fdb560e21b815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000061ffff168361ffff1614610c105760405162461bcd60e51b815260206004820152600d60248201526c10b9b7bab931b29031b430b4b760991b60448201526064016105f0565b336001600160a01b03831614610c535760405162461bcd60e51b815260206004820152600860248201526710b932b630bcb2b960c11b60448201526064016105f0565b60008181526006602052604090205460ff1615610ca65760405162461bcd60e51b8152602060048201526011602482015270185b1c9958591e481c1c9bd8d95cdcd959607a1b60448201526064016105f0565b6000908152600660205260409020805460ff191660011790555050565b600060a082901c15610b8c5760405162461bcd60e51b815260206004820152600c60248201526b2165766d206164647265737360a01b60448201526064016105f0565b610d0f826110e6565b610d4a5760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b60448201526064016105f0565b8051602014610d855760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016105f0565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f0000000000000000000000000000000000000000000000000000000000000000610dde8461167d565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b158015610e2257600080fd5b505af1158015610e36573d6000803e3d6000fd5b505050507fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610636929190611632565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b80471015610f245760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016105f0565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f71576040519150601f19603f3d011682016040523d82523d6000602084013e610f76565b606091505b5050905080610fed5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016105f0565b505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6003546000906001600160a01b03838116911614610a92565b815160201461113f5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b60448201526064016105f0565b80516020146111875760405162461bcd60e51b8152602060048201526014602482015273042cadcc6dec8cac840c8c2e8c240d8cadccee8d60631b60448201526064016105f0565b60008180602001905181019061119d91906116a4565b905060006111ab8287610642565b90503481146111e95760405162461bcd60e51b815260206004820152600a602482015269216d73672e76616c756560b01b60448201526064016105f0565b6005546040516312d729bd60e21b81526001600160a01b0380891692634b5ca6f4928592611248927f0000000000000000000000000000000000000000000000000000000000000000928c928c926000928c92879216906004016116bd565b60206040518083038185885af1158015611266573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061128b9190611716565b50505050505050565b80356001600160a01b03811681146112ab57600080fd5b919050565b6000602082840312156112c257600080fd5b6112cb82611294565b9392505050565b6000602082840312156112e457600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561132a5761132a6112eb565b604052919050565b600082601f83011261134357600080fd5b813567ffffffffffffffff81111561135d5761135d6112eb565b611370601f8201601f1916602001611301565b81815284602083860101111561138557600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156113b557600080fd5b823567ffffffffffffffff808211156113cd57600080fd5b6113d986838701611332565b935060208501359150808211156113ef57600080fd5b506113fc85828601611332565b9150509250929050565b6000806040838503121561141957600080fd5b8235915061142960208401611294565b90509250929050565b60006020828403121561144457600080fd5b813567ffffffffffffffff81111561145b57600080fd5b61146784828501611332565b949350505050565b803561ffff811681146112ab57600080fd5b600080600080600060a0868803121561149957600080fd5b853567ffffffffffffffff808211156114b157600080fd5b6114bd89838a01611332565b96506020915081880135818111156114d457600080fd5b8801601f81018a136114e557600080fd5b8035828111156114f7576114f76112eb565b8060051b611506858201611301565b918252828101850191858101908d84111561152057600080fd5b86850192505b8383101561155c5782358681111561153e5760008081fd5b61154c8f8983890101611332565b8352509186019190860190611526565b809a5050505050505050604086013592506115796060870161146f565b949793965091946080013592915050565b6000815180845260005b818110156115b057602081850181015186830182015201611594565b506000602082860101526020601f19601f83011685010191505092915050565b6060815260006115e3606083018661158a565b82810360208401526115f5818661158a565b91505060018060a01b0383166040830152949350505050565b6000806040838503121561162157600080fd5b505080516020909101519092909150565b604081526000611645604083018561158a565b905060018060a01b03831660208301529392505050565b81810381811115610a9257634e487b7160e01b600052601160045260246000fd5b8051602080830151919081101561169e576000198160200360031b1b821691505b50919050565b6000602082840312156116b657600080fd5b5051919050565b600061ffff808a16835260018060a01b03808a16602085015260e060408501526116ea60e085018a61158a565b925087606085015286608085015281861660a085015280851660c0850152505098975050505050505050565b60006020828403121561172857600080fd5b815167ffffffffffffffff811681146112cb57600080fdfea264697066735822122077ef5ddd4f84658dcd6f5d78758dafb44d91461cf057c309b77b296faf446eec64736f6c63430008110033";

type WormholeHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WormholeHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WormholeHubConnector__factory extends ContractFactory {
  constructor(...args: WormholeHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    _mirrorWormholeChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WormholeHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _gasCap,
      _mirrorWormholeChainId,
      overrides || {}
    ) as Promise<WormholeHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    _mirrorWormholeChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _gasCap,
      _mirrorWormholeChainId,
      overrides || {}
    );
  }
  override attach(address: string): WormholeHubConnector {
    return super.attach(address) as WormholeHubConnector;
  }
  override connect(signer: Signer): WormholeHubConnector__factory {
    return super.connect(signer) as WormholeHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WormholeHubConnectorInterface {
    return new utils.Interface(_abi) as WormholeHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WormholeHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WormholeHubConnector;
  }
}
