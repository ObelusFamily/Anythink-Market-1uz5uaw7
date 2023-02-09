#!/bin/bash

file=$1

tar -czvf "/backend/backup.tar.gz" "$file"

echo "Archiving done"
