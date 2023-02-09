#!/bin/bash

file=$1

tar -czvf "/usr/src/backend/backup.tar.gz" "$file"

echo "Archiving done"
