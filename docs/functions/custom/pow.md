# $pow

> Powers a number by another

## Usage

```php
$pow[num1;num2]
```

## Example

```js
client.command({
  name: "pow",
  code: `
  2^2 = $pow[2;2]
  ` 
}); // Will return 4
```