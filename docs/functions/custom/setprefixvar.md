# $setPrefixVar

> Changes the current prefix value to another (if 'prefix' variable exists)

## Usage

```php
$setPrefixVar[value;guildID?]
```

## Example

```js
client.command({
  name: "set-prefix",
  code: `
  Changed the prefix to '?'
  $setPrefixVar[?]
  `
});
```

:::disclaimer
You'll need to add 'prefix' variable into your variable list before using this function for avoiding possible errors!
![Example](https://github.com/oxtaa/oxi.js.docs/blob/main/static/img/prefixVar.png?raw=true)
