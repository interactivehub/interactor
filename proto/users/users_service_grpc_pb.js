// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_users_service_pb = require('../users/users_service_pb.js');

function serialize_users_service_NewUserRequest(arg) {
  if (!(arg instanceof users_users_service_pb.NewUserRequest)) {
    throw new Error('Expected argument of type users_service.NewUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_service_NewUserRequest(buffer_arg) {
  return users_users_service_pb.NewUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_service_NewUserResponse(arg) {
  if (!(arg instanceof users_users_service_pb.NewUserResponse)) {
    throw new Error('Expected argument of type users_service.NewUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_service_NewUserResponse(buffer_arg) {
  return users_users_service_pb.NewUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersServiceService = exports.UsersServiceService = {
  newUser: {
    path: '/users_service.UsersService/NewUser',
    requestStream: false,
    responseStream: false,
    requestType: users_users_service_pb.NewUserRequest,
    responseType: users_users_service_pb.NewUserResponse,
    requestSerialize: serialize_users_service_NewUserRequest,
    requestDeserialize: deserialize_users_service_NewUserRequest,
    responseSerialize: serialize_users_service_NewUserResponse,
    responseDeserialize: deserialize_users_service_NewUserResponse,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
