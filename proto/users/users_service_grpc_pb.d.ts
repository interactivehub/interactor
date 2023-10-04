// GENERATED CODE -- DO NOT EDIT!

// package: users_service
// file: users/users_service.proto

import * as users_users_service_pb from "../users/users_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  newUser: grpc.MethodDefinition<users_users_service_pb.NewUserRequest, google_protobuf_empty_pb.Empty>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer extends grpc.UntypedServiceImplementation {
  newUser: grpc.handleUnaryCall<users_users_service_pb.NewUserRequest, google_protobuf_empty_pb.Empty>;
}

export class UsersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  newUser(argument: users_users_service_pb.NewUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  newUser(argument: users_users_service_pb.NewUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  newUser(argument: users_users_service_pb.NewUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
