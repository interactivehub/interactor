// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_users_service_pb = require('../users/users_service_pb.js');
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

function serialize_users_service_NewUserRequest(arg) {
  if (!(arg instanceof users_users_service_pb.NewUserRequest)) {
    throw new Error('Expected argument of type users_service.NewUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_service_NewUserRequest(buffer_arg) {
  return users_users_service_pb.NewUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersServiceService = exports.UsersServiceService = {
  newUser: {
    path: '/users_service.UsersService/NewUser',
    requestStream: false,
    responseStream: false,
    requestType: users_users_service_pb.NewUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_service_NewUserRequest,
    requestDeserialize: deserialize_users_service_NewUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
