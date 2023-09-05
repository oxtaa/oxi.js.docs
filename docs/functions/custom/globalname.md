---
sidebar_position: 14
---
# $globalName

> Will return current user's global name (aka as display name), if any

## Usage

```php
$globalName[userID?]
```

## Example

```js
client.command({
  name: "globalName",
  code: `
  Your current global name is: $globalName
  `
});
```

:::note
If you don't have a global name set, this function will return your username instead.
