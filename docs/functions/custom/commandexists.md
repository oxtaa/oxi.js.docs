
# $commandExists

> Checks if a command exists or not by its name

## Usage

```php
$commandExists[name;type?]
```

## Example

```js
client.command({
  name: "check",
  code: `
  Does this command exist?: $commandExists[check;default]
  `
}); // Will return 'true'
```
