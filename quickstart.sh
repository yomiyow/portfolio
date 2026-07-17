#!/bin/bash
set -e

echo "Installing dependencies..."
pnpm install

echo "Starting Docker Compose Watch..."
docker compose watch nextjs-dev