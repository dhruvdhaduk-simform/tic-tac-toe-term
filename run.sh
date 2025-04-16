#/usr/bin/env bash

tmpfile=$(mktemp /tmp/tictactoetermbundle.XXXXX.mjs)

curl -fsSL https://tic-tac-toe-term.vercel.app/bundle.mjs -o "$tmpfile" || {
    echo "Failed to download script."
    exit 1
}

node "$tmpfile"
rm -f "$tmpfile"