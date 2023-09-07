# $removeEmojis

> Removes emojis from given text

## Usage

```php
$removeEmojis[text]
```

## Example

```js
client.command({
  name: "removeEmojis",
  code: `
  $removeEmojis[Hello! 😄]
  ` 
}); // Will return 'Hello!' without '😄'
```