---
sidebar_position: 1
---

# $advancedReplaceText

> Allows you to replace multiple coincidences in a string.

## Usage

```php
$advancedReplaceText[original text;word1:replacement1,word2:replacement2,etc:etc]
```

## Example

```js
client.command({
  name: "replaceText",
  code: `
  $advancedReplaceText[Hello, amazing community!;amazing:beautiful,community:people]
  `
}); // Will return 'Hello, beautiful people!'
```
