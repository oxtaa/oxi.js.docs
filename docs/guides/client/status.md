---
sidebar_position: 3
---

# Client Status

## Setting a client status

You need to enter the following in your main index:

```js title="index.js"
client.status({
  text: "String",
  type: "Type",
  time: number
})
```

### Adding multiple status

```js title="index.js"
client.status({
  text: "Text1",
  type: "Type",
  time: number
})

client.status({
  text: "TEXT2",
  type: "Type",
  time: number
})
```

### Status types:

- PLAYING
- LISTENING
- WATCHING
- STREAMING
- COMPETING

### Client presence

You can also set the bot's presence, by adding the `status` property, for example:

```js title="index.js"
client.status({
  text: "Example Text!",
  type: "PLAYING",
  status: "dnd",
  time: 12
});
```

There are multiple types of presences

- online
- dnd
- idle
- invisible
