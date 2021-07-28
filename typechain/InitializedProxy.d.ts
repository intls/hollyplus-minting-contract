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

interface InitializedProxyInterface extends ethers.utils.Interface {
  functions: {
    "logic()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "logic", values?: undefined): string;

  decodeFunctionResult(functionFragment: "logic", data: BytesLike): Result;

  events: {};
}

export class InitializedProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: InitializedProxyInterface;

  functions: {
    logic(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "logic()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  logic(overrides?: CallOverrides): Promise<string>;

  "logic()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    logic(overrides?: CallOverrides): Promise<string>;

    "logic()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    logic(overrides?: CallOverrides): Promise<BigNumber>;

    "logic()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    logic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "logic()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
