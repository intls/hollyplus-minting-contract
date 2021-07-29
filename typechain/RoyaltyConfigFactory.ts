/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RoyaltyConfig } from "./RoyaltyConfig";

export class RoyaltyConfigFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RoyaltyConfig> {
    return super.deploy(overrides || {}) as Promise<RoyaltyConfig>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RoyaltyConfig {
    return super.attach(address) as RoyaltyConfig;
  }
  connect(signer: Signer): RoyaltyConfigFactory {
    return super.connect(signer) as RoyaltyConfigFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoyaltyConfig {
    return new Contract(address, _abi, signerOrProvider) as RoyaltyConfig;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bps",
        type: "uint256",
      },
    ],
    name: "UpdatedRoyalty",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getRoyalties",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "value",
            type: "uint96",
          },
        ],
        internalType: "struct LibPart.Part[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610355806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a7146100465780632a55205a1461006e578063bb3bafd6146100a0575b600080fd5b61005961005436600461020a565b6100c0565b60405190151581526020015b60405180910390f35b61008161007c366004610254565b610112565b604080516001600160a01b039093168352602083019190915201610065565b6100b36100ae36600461023b565b610153565b6040516100659190610276565b60006001600160e01b03198216631131d2f360e21b14806100f157506001600160e01b0319821663152a902d60e11b145b8061010c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60015460009081906001600160a01b0316610131620f424060646102dc565b60005461013e90866102dc565b61014891906102dc565b915091509250929050565b60408051600180825281830190925260609160009190816020015b604080518082019091526000808252602082015281526020019060019003908161016e57505060015481519192506001600160a01b03169082906000906101b7576101b7610309565b60209081029190910101516001600160a01b039091169052600080548251909183916101e5576101e5610309565b6020908102919091018101516bffffffffffffffffffffffff90921691015292915050565b60006020828403121561021c57600080fd5b81356001600160e01b03198116811461023457600080fd5b9392505050565b60006020828403121561024d57600080fd5b5035919050565b6000806040838503121561026757600080fd5b50508035926020909101359150565b602080825282518282018190526000919060409081850190868401855b828110156102cf57815180516001600160a01b031685528601516bffffffffffffffffffffffff16868501529284019290850190600101610293565b5091979650505050505050565b600081600019048311821515161561030457634e487b7160e01b600052601160045260246000fd5b500290565b634e487b7160e01b600052603260045260246000fdfea26469706673582212204f78230b1fe79141eac0f88ca119fe27e97092ce9a436a789d6ee63b50477ea464736f6c63430008050033";