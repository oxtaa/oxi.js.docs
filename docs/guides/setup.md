---
sidebar_position: 1
---
# Setup

> The basic setup you'll need to begin using oxi.js.

## Installation

<Tabs groupId="pref-install">
  <TabItem value="npminstall" label="npm">

  **NodeJS 16.9.0 or newer is required.**
  ```bash
  npm install oxi.js@latest
  ```

  </TabItem>
  <TabItem value="yarninstall" label="yarn">

  **NodeJS 16.9.0 or newer is required.**
  ```bash
  yarn add oxi.js
  ```
  
  </TabItem>
</Tabs>

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
