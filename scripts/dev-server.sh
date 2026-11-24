#!/usr/bin/env bash
set -euo pipefail

# Build and verify the static site bundle for dev deployment without interfering
# with any live server processes. Pass --serve (or SERVE=1) to also launch a
# local Vite preview server.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${REPO_ROOT}"

SERVE_MODE="${SERVE:-0}"
for arg in "$@"; do
  case "${arg}" in
    --serve)
      SERVE_MODE=1
      ;;
    -h|--help)
      echo "Usage: ./scripts/dev-server.sh [--serve]"
      echo "  Builds and verifies the static site in ./docs."
      echo "  --serve  Also start 'npm run preview' on HOST (default 127.0.0.1) and PORT (default 4173)."
      exit 0
      ;;
    *)
      echo "Unknown argument: ${arg}" >&2
      exit 1
      ;;
  esac
done

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

echo "Building site bundle..."
npm run build

if [ ! -s "docs/index.html" ]; then
  echo "Error: expected built entrypoint docs/index.html is missing or empty." >&2
  exit 1
fi

if [ ! -s "docs/EdwardJones-Resume-Sanitised.pdf" ]; then
  echo "Error: expected resume asset docs/EdwardJones-Resume-Sanitised.pdf is missing or empty." >&2
  exit 1
fi

echo "Dev build verified successfully in ${REPO_ROOT}/docs."

if [ "${SERVE_MODE}" = "1" ]; then
  HOST="${HOST:-127.0.0.1}"
  PORT="${PORT:-4173}"
  echo "Starting Vite preview server on http://${HOST}:${PORT}..."
  exec npm run preview -- --host "${HOST}" --port "${PORT}"
fi
