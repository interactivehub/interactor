#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <proto_directory> <output_directory>"
  exit 1
fi

PROTO_DIR="$1"
OUTPUT_DIR="$2"

mkdir -p "$OUTPUT_DIR"

grpc_tools_node_protoc \
    -I="$PROTO_DIR" \
    --plugin=protoc-gen-ts=$(npm bin)/protoc-gen-ts \
    --plugin=protoc-gen-grpc=$(npm bin)/grpc_tools_node_protoc_plugin \
    --js_out=import_style=commonjs:$OUTPUT_DIR \
    --grpc_out=grpc_js:$OUTPUT_DIR \
    --ts_out=service=grpc-node,mode=grpc-js:$OUTPUT_DIR \
    "$PROTO_DIR"/**/**/*.proto