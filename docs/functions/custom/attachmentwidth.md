---
sidebar_position: 3
---

# $attachmentWidth

> Returns an attachment's width (if something's attached)

## Usage

```php
$attachmentWidth
```

This function doesn't have any additional fields.

## Example
```js
client.command({
  name: "attWidth",
  code: `
  Your attachment's width is: $attachmentWidth.
  `
});
```

:::note
You'll need to attach something to your message, this function only supports images by the moment.

![Example image](https://github.com/oxtaa/oxi.js.docs/blob/main/static/img/exAttWidth.png?raw=true)
