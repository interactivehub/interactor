#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <proto_directory> <output_directory>"
  exit 1
fi

PROTO_DIR="$1"
OUTPUT_DIR="$2"

mkdir -p "$OUTPUT_DIR"

find "$OUTPUT_DIR" -type f -name "*.proto" -print0 | while IFS= read -r -d $'\0' proto_file; do
  protoc --plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts --ts_out="$OUTPUT_DIR" --proto_path="$PROTO_DIR" "$proto_file"
done
