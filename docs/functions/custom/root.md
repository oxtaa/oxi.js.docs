# $root

> Solves the nth root of a number

## Usage

```php
$root[num1;num2?]
```

## Example

```js
client.command({
  name: "pow",
  code: `
  The cube root of 8 is equal to $root[8;3]
  ` 
}); // Function will return 2
```