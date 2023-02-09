#!/bin/bash

file=$1

tar -czvf "/backup.tar.gz" "$file"

echo "Archiving done"
