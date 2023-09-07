# $userInfo

> Allows you to make a 'user info' command without using a bunch of different functions at once

## Usage

```php
$userInfo[userID;message;useEmbed?;useThumbnail?]
```

## Available properties

| Name        | Type    | Description                                               |
| ----------- | ------- | --------------------------------------------------------- |
| {username}  | string  | Returns user's username                                   |
| {id}	      | string  | Returns user's ID						                    |
| {usertag}   | string  | Returns user's tag						                |
| {discriminator} | number  | Returns user's discriminator    						|
| {avatar} | string | Returns user's avatar URL |
| {bot}       | boolean  | Whether the user is a bot or not                        |
| {creationDate}     | string  | Returns the user's account creation date.
| {defaultAvatar}   | string  | Returns user's default avatar URL             |
| {bannerColor}   | string  | Returns user's HEX accent color      |
| {badges} | string | Returns user's badges |

:::note

This function automatically creates an embed, you can disable it by typing "no" in `useEmbed` field.

This function also includes a thumbnail with the user's avatar, you can disable it by typing "no" in `useThumbnail` field, this will also be removed when typing "no" in `useEmbed`

:::

## Example

```js
client.command({
  name: "userInfo",
  code: `
  $userInfo[{username}'s info:
  ID: {id}
  avatar: {avatar}
  Account creation date: {creationDate}
  Badges: {badges}]
  `
});
```