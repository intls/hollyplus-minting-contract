/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RoyaltyConfigInterface extends ethers.utils.Interface {
  functions: {
    "getRoyalties(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRoyalties",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "UpdatedRoyalty(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdatedRoyalty"): EventFragment;
}

export class RoyaltyConfig extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RoyaltyConfigInterface;

  functions: {
    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { account: string; value: BigNumber; 0: string; 1: BigNumber }[];
    }>;

    "getRoyalties(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { account: string; value: BigNumber; 0: string; 1: BigNumber }[];
    }>;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      receiver: string;
      royaltyAmount: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    "royaltyInfo(uint256,uint256)"(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      receiver: string;
      royaltyAmount: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  getRoyalties(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ account: string; value: BigNumber; 0: string; 1: BigNumber }[]>;

  "getRoyalties(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ account: string; value: BigNumber; 0: string; 1: BigNumber }[]>;

  royaltyInfo(
    tokenId: BigNumberish,
    salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    receiver: string;
    royaltyAmount: BigNumber;
    0: string;
    1: BigNumber;
  }>;

  "royaltyInfo(uint256,uint256)"(
    tokenId: BigNumberish,
    salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    receiver: string;
    royaltyAmount: BigNumber;
    0: string;
    1: BigNumber;
  }>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { account: string; value: BigNumber; 0: string; 1: BigNumber }[]
    >;

    "getRoyalties(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { account: string; value: BigNumber; 0: string; 1: BigNumber }[]
    >;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      receiver: string;
      royaltyAmount: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    "royaltyInfo(uint256,uint256)"(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      receiver: string;
      royaltyAmount: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    UpdatedRoyalty(recipient: null, bps: null): EventFilter;
  };

  estimateGas: {
    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoyalties(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "royaltyInfo(uint256,uint256)"(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRoyalties(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoyalties(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "royaltyInfo(uint256,uint256)"(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
