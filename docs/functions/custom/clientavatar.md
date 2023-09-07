
# $clientAvatar

> Returns the bot's current avatar

## Usage

```php
$clientAvatar
```

This function doesn't have any additional fields.

## Example

```js
client.command({
  name: "botAvatar",
  code: `
  My current avatar is: $clientavatar
  ` // Will return your bot's avatar URL.
});
```
