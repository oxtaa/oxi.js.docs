
# $getAdvancedObject

> Returns stringified JSON Object (or a specified property of it) by it's name previously established using $createAdvancedObject

## Usage

```php
$getAdvancedObject[name;property?;format? (yes/no)]
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
