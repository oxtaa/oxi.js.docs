# $roundToNearest

## Usage

```php
$roundToNearest[number]
```

## Example

```js
client.command({
  name: "round",
  code: `
  $roundToNearest[29340]
  `
}); // Will return 29000
```