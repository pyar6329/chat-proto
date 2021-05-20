const proto = {};
proto.chatPb = require('./dist/chat_pb.js');
proto.chatGrpcWebPb = require('./dist/chat_grpc_web_pb.js');
proto.grpcWeb = require('grpc-web');
proto.googleProtobuf = require('google-protobuf');
proto.googleProtobufTimestampPb = require('google-protobuf/google/protobuf/timestamp_pb.js');
proto.googleProtobufEmptyPb = require('google-protobuf/google/protobuf/empty_pb.js');
module.exports = proto;

