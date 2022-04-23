// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class lockRequest extends ethereum.Event {
  get params(): lockRequest__Params {
    return new lockRequest__Params(this);
  }
}

export class lockRequest__Params {
  _event: lockRequest;

  constructor(event: lockRequest) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get x(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get y(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get xx(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get yy(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class unlockRule extends ethereum.Event {
  get params(): unlockRule__Params {
    return new unlockRule__Params(this);
  }
}

export class unlockRule__Params {
  _event: unlockRule;

  constructor(event: unlockRule) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get x(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get y(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get xx(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get yy(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class placePixel extends ethereum.SmartContract {
  static bind(address: Address): placePixel {
    return new placePixel("placePixel", address);
  }

  arbitrator(): Address {
    let result = super.call("arbitrator", "arbitrator():(address)", []);

    return result[0].toAddress();
  }

  try_arbitrator(): ethereum.CallResult<Address> {
    let result = super.tryCall("arbitrator", "arbitrator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  challengePeriod(): BigInt {
    let result = super.call(
      "challengePeriod",
      "challengePeriod():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_challengePeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "challengePeriod",
      "challengePeriod():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  costPerPixel(): BigInt {
    let result = super.call("costPerPixel", "costPerPixel():(uint256)", []);

    return result[0].toBigInt();
  }

  try_costPerPixel(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("costPerPixel", "costPerPixel():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reality(): Address {
    let result = super.call("reality", "reality():(address)", []);

    return result[0].toAddress();
  }

  try_reality(): ethereum.CallResult<Address> {
    let result = super.tryCall("reality", "reality():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ChangePixelsCall extends ethereum.Call {
  get inputs(): ChangePixelsCall__Inputs {
    return new ChangePixelsCall__Inputs(this);
  }

  get outputs(): ChangePixelsCall__Outputs {
    return new ChangePixelsCall__Outputs(this);
  }
}

export class ChangePixelsCall__Inputs {
  _call: ChangePixelsCall;

  constructor(call: ChangePixelsCall) {
    this._call = call;
  }

  get _pixels(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ChangePixelsCall__Outputs {
  _call: ChangePixelsCall;

  constructor(call: ChangePixelsCall) {
    this._call = call;
  }
}

export class DownvoteCall extends ethereum.Call {
  get inputs(): DownvoteCall__Inputs {
    return new DownvoteCall__Inputs(this);
  }

  get outputs(): DownvoteCall__Outputs {
    return new DownvoteCall__Outputs(this);
  }
}

export class DownvoteCall__Inputs {
  _call: DownvoteCall;

  constructor(call: DownvoteCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DownvoteCall__Outputs {
  _call: DownvoteCall;

  constructor(call: DownvoteCall) {
    this._call = call;
  }
}

export class ExecuteRulingCall extends ethereum.Call {
  get inputs(): ExecuteRulingCall__Inputs {
    return new ExecuteRulingCall__Inputs(this);
  }

  get outputs(): ExecuteRulingCall__Outputs {
    return new ExecuteRulingCall__Outputs(this);
  }
}

export class ExecuteRulingCall__Inputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ExecuteRulingCall__Outputs {
  _call: ExecuteRulingCall;

  constructor(call: ExecuteRulingCall) {
    this._call = call;
  }
}

export class LockCall extends ethereum.Call {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get _x(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _y(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _xx(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _yy(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get quesitonID(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpvoteCall extends ethereum.Call {
  get inputs(): UpvoteCall__Inputs {
    return new UpvoteCall__Inputs(this);
  }

  get outputs(): UpvoteCall__Outputs {
    return new UpvoteCall__Outputs(this);
  }
}

export class UpvoteCall__Inputs {
  _call: UpvoteCall;

  constructor(call: UpvoteCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class UpvoteCall__Outputs {
  _call: UpvoteCall;

  constructor(call: UpvoteCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _costPerPixel(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
