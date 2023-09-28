// package: users_service
// file: users/users_service.proto

import * as jspb from "google-protobuf";

export class NewUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewUserRequest): NewUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUserRequest;
  static deserializeBinaryFromReader(message: NewUserRequest, reader: jspb.BinaryReader): NewUserRequest;
}

export namespace NewUserRequest {
  export type AsObject = {
    userId: string,
    uniqueId: string,
    nickname: string,
  }
}

export class NewUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewUserResponse): NewUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUserResponse;
  static deserializeBinaryFromReader(message: NewUserResponse, reader: jspb.BinaryReader): NewUserResponse;
}

export namespace NewUserResponse {
  export type AsObject = {
    userId: string,
  }
}

