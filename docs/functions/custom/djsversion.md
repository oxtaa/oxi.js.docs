
# $djsVersion

> Returns current discord.js version

## Usage

```php
$djsVersion
```

This function doesn't have any additional fields.

## Example

```js
client.command({
  name: "djsVersion",
  code: `
  Currently using discord.js $djsVersion
  ` // Will return: 'Currently using discord.js 13.16.0'
});
```
