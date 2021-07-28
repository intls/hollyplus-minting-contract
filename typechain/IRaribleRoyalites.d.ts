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

interface IRaribleRoyalitesInterface extends ethers.utils.Interface {
  functions: {
    "getRoyalties(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRoyalties",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRoyalties",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRaribleRoyalites extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRaribleRoyalitesInterface;

  functions: {
    getRoyalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { account: string; value: BigNumber; 0: string; 1: BigNumber }[];
    }>;

    "getRoyalties(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: { account: string; value: BigNumber; 0: string; 1: BigNumber }[];
    }>;
  };

  getRoyalties(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ account: string; value: BigNumber; 0: string; 1: BigNumber }[]>;

  "getRoyalties(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ account: string; value: BigNumber; 0: string; 1: BigNumber }[]>;

  callStatic: {
    getRoyalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { account: string; value: BigNumber; 0: string; 1: BigNumber }[]
    >;

    "getRoyalties(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      { account: string; value: BigNumber; 0: string; 1: BigNumber }[]
    >;
  };

  filters: {};

  estimateGas: {
    getRoyalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoyalties(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRoyalties(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoyalties(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
