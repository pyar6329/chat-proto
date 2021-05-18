const proto = {};
proto.chatPb = require('./out/chat_pb.js');
proto.chatGrpcWebPb = require('./out/chat_grpc_web_pb.js');
proto.grpcWeb = require('grpc-web');
proto.googleProtobuf = require('google-protobuf');
proto.googleProtobufTimestampPb = require('google-protobuf/google/protobuf/timestamp_pb.js');
proto.googleProtobufEmptyPb = require('google-protobuf/google/protobuf/empty_pb.js');
module.exports = proto;

