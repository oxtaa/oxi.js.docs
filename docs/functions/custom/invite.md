# $invite

> Fetches information about a server invite

## Usage

```php
$invite[invite URL/code;property]
```

## Available properties

| Name        | Type    | Description                                               |
| ----------- | ------- | --------------------------------------------------------- |
| code        | string  | Returns invite code                                       |
| guildID     | number  | Returns the guild ID the invite is for                    |
| inviterID   | number  | Returns the user ID who created the invite                |
| channelID   | number  | Returns the guild channel ID that the invite leads to     |
| isTemporary | boolean | Whether the invitation grants temporary membership or not |
| uses        | number  | How many users used the invitation                        |
| maxUses     | number  | How many times the invite can be used                     |
| createdAt   | number  | The timestamp when the invite URL was created             |
| expiresAt   | number  | The timestamp when the invitation is going to expire      |

## Example

```javascript
client.command({
  name: "invite",
  code: `
  $invite[abc123;guildID]
  `
});
```