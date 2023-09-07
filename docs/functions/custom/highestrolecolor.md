# $highestRoleColor

> Will return user's highest role color (if it has a role)

## Usage

```php
$highestRoleColor[userID?;guildID?
```

## Example

```js
client.command({
  name: "highestRoleColor",
  code: `
  Your highest role color is $highestRoleColor
  ` // Will return, for example, '#ff0000' (red) or gray if you don't have any roles
});
```