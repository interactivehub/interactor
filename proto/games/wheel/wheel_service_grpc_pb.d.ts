// GENERATED CODE -- DO NOT EDIT!

// package: wheel_service
// file: games/wheel/wheel_service.proto

import * as games_wheel_wheel_service_pb from "../../games/wheel/wheel_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IWheelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  joinWheelRound: grpc.MethodDefinition<games_wheel_wheel_service_pb.JoinWheelRoundRequest, google_protobuf_empty_pb.Empty>;
}

export const WheelServiceService: IWheelServiceService;

export interface IWheelServiceServer extends grpc.UntypedServiceImplementation {
  joinWheelRound: grpc.handleUnaryCall<games_wheel_wheel_service_pb.JoinWheelRoundRequest, google_protobuf_empty_pb.Empty>;
}

export class WheelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  joinWheelRound(argument: games_wheel_wheel_service_pb.JoinWheelRoundRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  joinWheelRound(argument: games_wheel_wheel_service_pb.JoinWheelRoundRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  joinWheelRound(argument: games_wheel_wheel_service_pb.JoinWheelRoundRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
