// package: wheel_service
// file: games/wheel/wheel_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class JoinWheelRoundRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getBet(): number;
  setBet(value: number): void;

  getPick(): WheelItemColorMap[keyof WheelItemColorMap];
  setPick(value: WheelItemColorMap[keyof WheelItemColorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinWheelRoundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinWheelRoundRequest): JoinWheelRoundRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinWheelRoundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinWheelRoundRequest;
  static deserializeBinaryFromReader(message: JoinWheelRoundRequest, reader: jspb.BinaryReader): JoinWheelRoundRequest;
}

export namespace JoinWheelRoundRequest {
  export type AsObject = {
    userId: string,
    bet: number,
    pick: WheelItemColorMap[keyof WheelItemColorMap],
  }
}

export interface WheelItemColorMap {
  GREY: 0;
  BLUE: 1;
  YELLOW: 2;
  RED: 3;
}

export const WheelItemColor: WheelItemColorMap;

