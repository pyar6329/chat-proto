#!/bin/bash

SCRIPT_DIR=$(echo $(cd $(dirname $0) && pwd))

PROTO_DIR="${SCRIPT_DIR}/../../proto"
OUTPUT_DIR="${SCRIPT_DIR}/../out"

if ! [ -e "${OUTPUT_DIR}" ]; then
    mkdir ${OUTPUT_DIR}
fi

protoc \
  -I=${PROTO_DIR} \
  -I=${PROTO_DIR}/../.include \
  --js_out=import_style=commonjs:${OUTPUT_DIR} \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${OUTPUT_DIR} \
  ${PROTO_DIR}/**.proto
