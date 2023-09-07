
# $createAdvancedObject

> Creates an object with a name, can be used multiple times

## Usage

```php
$createAdvancedObject[name;{json}]
```

## Example

```js
client.command({
  name: "advancedObjects",
  code: `
  $getAdvancedObject[obj1]
  $getAdvancedObject[obj2;property]
  $createAdvancedObject[obj1;{"property": "Hello, world!"}]
  $createAdvancedObject[obj2;{"property": "Hello there"}]
  `
})
```
