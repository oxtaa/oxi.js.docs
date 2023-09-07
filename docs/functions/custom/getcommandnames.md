
# $getCommandNames

> Gets all command names for a specific type of command

## Usage

```php
$getCommandNames[type?;separator?]
```

## Example

```js
client.command({
  name: "commandNames",
  code: `
  My commands are: $getCommandNames[default]
  `
});
```
