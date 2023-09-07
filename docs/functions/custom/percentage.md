# $percentage

> Calculates a percentage of a number

## Usage

```php
$percentage[full number;percentage]
```

## Example

```js
client.command({
  name: "percentage",
  code: `
  50% of 1000 is $percentage[1000;50]
  `
}); // Returns 500
```