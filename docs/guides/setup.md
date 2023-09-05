---
sidebar_position: 1
---
# Setup

> The basic setup you'll need to begin using oxi.js.

## Installation

```bash
npm i oxi.js@latest
```

## Setup example

```js title="index.js (example)"
const oxi = require("oxi.js");

const client = new oxi.Client({
    token: "Your token", // Token
    prefix: "Your prefix", // Prefix
    intents: ["GUILDS", "GUILD_MESSAGES"] // Intents
}); // Client initializer

client.onMessage();

client.command({
  name: "ping",
  code: `Pong! $pingms`
}); // Command example
```
