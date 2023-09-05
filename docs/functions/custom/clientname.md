---
sidebar_position: 5
---

# $clientName

> Returns the bot's current username

## Usage

```php
$clientName
```

This function doesn't have any additional fields.

## Example

```js
client.command({
  name: "botName",
  code: `
  My name is: $clientName
  ` // Will return your bot's name.
});
```
