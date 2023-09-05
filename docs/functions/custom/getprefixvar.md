---
sidebar_position: 13
---
# $getPrefixVar

> Returns current prefix value (if variable exists)

## Usage

```php
$getPrefixVar[guildID?]
```

## Example

```js
client.command({
  name: "prefix",
  code: `
  Current prefix is: $getPrefixVar
  ` // Will return, for example, '!'
});
```

:::disclaimer
You'll need to add 'prefix' variable into your variable list before using this function for avoiding possible errors!
![Example](https://github.com/oxtaa/oxi.js.docs/blob/main/static/img/prefixVar.png?raw=true)
