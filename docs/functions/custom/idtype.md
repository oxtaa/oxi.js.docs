# $idType

> Resolves and returns what type of ID is provided

## Usage

```php
$idType[ID (any)]
```

## Example

```js
client.command({
  name: "IDType",
  code: `
  This is an ID of a $idType[$channelID]
  `
}); // Returns 'This is an ID of a channel'
```