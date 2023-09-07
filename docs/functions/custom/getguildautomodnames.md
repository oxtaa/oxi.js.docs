
# $getGuildAutomodNames

> This will return the automod rules of the current guild (if any)

## Usage

```php
$getGuildAutomodNames[guildID?;separator?]
```

## Example

```js
client.command({
  name: 'getGuildAutomodNames',
  code: `
  $getGuildAutomodNames[$guildID]
  `
});
```
