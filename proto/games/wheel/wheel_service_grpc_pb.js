// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var games_wheel_wheel_service_pb = require('../../games/wheel/wheel_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wheel_service_JoinWheelRoundRequest(arg) {
  if (!(arg instanceof games_wheel_wheel_service_pb.JoinWheelRoundRequest)) {
    throw new Error('Expected argument of type wheel_service.JoinWheelRoundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wheel_service_JoinWheelRoundRequest(buffer_arg) {
  return games_wheel_wheel_service_pb.JoinWheelRoundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WheelServiceService = exports.WheelServiceService = {
  joinWheelRound: {
    path: '/wheel_service.WheelService/JoinWheelRound',
    requestStream: false,
    responseStream: false,
    requestType: games_wheel_wheel_service_pb.JoinWheelRoundRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_wheel_service_JoinWheelRoundRequest,
    requestDeserialize: deserialize_wheel_service_JoinWheelRoundRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.WheelServiceClient = grpc.makeGenericClientConstructor(WheelServiceService);
