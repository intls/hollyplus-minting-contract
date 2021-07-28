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

interface ISubmitterPayoutInformationInterface extends ethers.utils.Interface {
  functions: {
    "getSubmitterPayoutInformation(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSubmitterPayoutInformation",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSubmitterPayoutInformation",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISubmitterPayoutInformation extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ISubmitterPayoutInformationInterface;

  functions: {
    getSubmitterPayoutInformation(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getSubmitterPayoutInformation(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  getSubmitterPayoutInformation(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getSubmitterPayoutInformation(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getSubmitterPayoutInformation(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getSubmitterPayoutInformation(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getSubmitterPayoutInformation(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSubmitterPayoutInformation(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSubmitterPayoutInformation(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSubmitterPayoutInformation(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
