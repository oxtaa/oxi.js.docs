---
sidebar_position: 2
---

# $attachmentHeight

> Returns an attachment's height (if something's attached)

## Usage

```php
$attachmentHeight
```

This function doesn't have any additional fields.

## Example
```js
client.command({
  name: "attHeight",
  code: `
  Your attachment's height is: $attachmentHeight.
  `
});
```

:::note
You'll need to attach something to your message, this function only supports images by the moment.

![Example image](https://github.com/oxtaa/oxi.js.docs/static/images/exAttHeight.png?raw=true)
