# $removeDiacritics

> Removes diacritics from given string

## Usage

```php
$removeDiacritics[text]
```

## Example

```js
client.command({
  name: "removeDiacritics",
  code: `
  $removeDiacritics[Hélló! Thís ìs a text that doesn't havé diacrítics (ñ is not removed)]
  `
}); // Returns 'Hello! This is text that doesn't have diacritics (ñ is not removed)'
```
