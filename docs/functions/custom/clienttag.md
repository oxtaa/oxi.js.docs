---
sidebar_position: 6
---
# $clientTag

> Returns bot's userTag

## Usage

```php
$clientTag
```

This function doesn't have any additional fields.

## Example

```js
client.command({
  name: "botTag",
  code: `
  My userTag is: $clientTag
  ` // Will return your bot's userTag (if any).
});
```
