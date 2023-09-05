---
sidebar_position: 2
---
# Variables

> This guide will provide you a comprehensive understanding of variables.

## Declaring variables

Variables are useful tools in programming that allow you to store values that can be accessed and manipulated throughout your code. To use a variable, you first need to declare it by giving it a name and assigning a value to it.

One way to do this is by using the following code snippet in your main file (usually named index.js):

```js title="index.js"
client.variables({
  variableName: boolean,
  variableName: number,
  variableName: object,
  variableName: "string"
});
```

### Example

```js title="index.js"
client.variables({
  condition: true,
  level: 1,
  developers: {dev: "oxta"},
  name: "Cool Bot"
});
```
