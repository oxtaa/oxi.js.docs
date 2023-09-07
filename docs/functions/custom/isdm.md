# $isDM

> Checks if current channel is a DM channel or not

## Usage

```php
$isDM
```

This function doesn't have any additional fields.

## Example

```js
client.command({
  name: "isDM",
  code: `
  Is this channel a DM channel?: $isDM
  `
});
```