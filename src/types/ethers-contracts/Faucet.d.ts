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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface FaucetInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "allowedHits()": FunctionFragment;
    "feedMe()": FunctionFragment;
    "hitMe()": FunctionFragment;
    "hits(address)": FunctionFragment;
    "resetGasAndTokens(uint256)": FunctionFragment;
    "setAllowedHits(uint8)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowedHits",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feedMe", values?: undefined): string;
  encodeFunctionData(functionFragment: "hitMe", values?: undefined): string;
  encodeFunctionData(functionFragment: "hits", values: [string]): string;
  encodeFunctionData(
    functionFragment: "resetGasAndTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowedHits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedHits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feedMe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hitMe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "resetGasAndTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowedHits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class Faucet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FaucetInterface;

  functions: {
    admin(overrides?: CallOverrides): Promise<[string]>;

    "admin()"(overrides?: CallOverrides): Promise<[string]>;

    allowedHits(overrides?: CallOverrides): Promise<[number]>;

    "allowedHits()"(overrides?: CallOverrides): Promise<[number]>;

    feedMe(overrides?: CallOverrides): Promise<[BigNumber]>;

    "feedMe()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    hitMe(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "hitMe()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    hits(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "hits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    resetGasAndTokens(
      _feedMe: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "resetGasAndTokens(uint256)"(
      _feedMe: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAllowedHits(
      _newHits: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAllowedHits(uint8)"(
      _newHits: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  allowedHits(overrides?: CallOverrides): Promise<number>;

  "allowedHits()"(overrides?: CallOverrides): Promise<number>;

  feedMe(overrides?: CallOverrides): Promise<BigNumber>;

  "feedMe()"(overrides?: CallOverrides): Promise<BigNumber>;

  hitMe(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "hitMe()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  hits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "hits(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  resetGasAndTokens(
    _feedMe: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "resetGasAndTokens(uint256)"(
    _feedMe: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAllowedHits(
    _newHits: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAllowedHits(uint8)"(
    _newHits: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    allowedHits(overrides?: CallOverrides): Promise<number>;

    "allowedHits()"(overrides?: CallOverrides): Promise<number>;

    feedMe(overrides?: CallOverrides): Promise<BigNumber>;

    "feedMe()"(overrides?: CallOverrides): Promise<BigNumber>;

    hitMe(overrides?: CallOverrides): Promise<string>;

    "hitMe()"(overrides?: CallOverrides): Promise<string>;

    hits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "hits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resetGasAndTokens(
      _feedMe: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "resetGasAndTokens(uint256)"(
      _feedMe: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAllowedHits(
      _newHits: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "setAllowedHits(uint8)"(
      _newHits: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowedHits(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedHits()"(overrides?: CallOverrides): Promise<BigNumber>;

    feedMe(overrides?: CallOverrides): Promise<BigNumber>;

    "feedMe()"(overrides?: CallOverrides): Promise<BigNumber>;

    hitMe(overrides?: PayableOverrides): Promise<BigNumber>;

    "hitMe()"(overrides?: PayableOverrides): Promise<BigNumber>;

    hits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "hits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resetGasAndTokens(
      _feedMe: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "resetGasAndTokens(uint256)"(
      _feedMe: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAllowedHits(
      _newHits: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAllowedHits(uint8)"(
      _newHits: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowedHits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "allowedHits()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feedMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feedMe()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hitMe(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "hitMe()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    hits(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resetGasAndTokens(
      _feedMe: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "resetGasAndTokens(uint256)"(
      _feedMe: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAllowedHits(
      _newHits: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAllowedHits(uint8)"(
      _newHits: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
