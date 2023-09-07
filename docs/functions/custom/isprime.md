# $isPrime

> Checks if given number is a prime number or not

## Usage

```php
$isPrime[number]
```

## Example

```js
client.command({
  name: "arePrime",
  code: `
  Is 3 a prime number?: $isPrime[3]
  `
}); // Returns 'true'
```