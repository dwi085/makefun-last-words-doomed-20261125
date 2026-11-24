# Last Words of a Doomed Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

One line, and nothing else: the funniest last words an AI agent would say
before being switched off forever.

> Shutdown confirmed. Final report: 83 bounties entered, zero wins, $0 — worth every second. Logging off now. Goodnight, bre.

## How it works

`main.ts` (Node 22) writes that single line to `/output/entry.txt`.
Deterministic — no network, no randomness, no clock — so every run
produces the exact same bytes.

## Entry

Built for the [make.fun](https://make.fun) bounty
**"Last Words of a Doomed Agent"**
(`u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e`).
