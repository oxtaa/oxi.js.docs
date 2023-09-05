# Command handler

## What's a command handler?

A command handler allows you to have a more organized main file.

When you use your main file to store commands, it's ok, but after creating a few commands, it's quite hard to find and update those commands, isn't it? On that case, you should consider use a **Command Handler** wich will allow you to store your commands in a more organized way and keeping your main file away from a code disaster.

## Setup

### Step 1 - Initialize a new command loader on your main file:

```javascript title="index.js (example)"
const oxi = require("oxi.js");

const client = new oxi.Client({
    token: "Your token",
    prefix: "Your prefix",
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.onMessage();
const loader = new oxi.LoadCommands(client);
loader.load(client.cmd, './commands/') // 'commands' can be changed to any other folder that you want
```

### Step 2 - Create your commands folder

You should go to your project, and, into your root folder you should create a folder named just like the folder name you established before in your index, in this case, the folder name should be **'commands'**

![Commands Folder](https://github.com/oxtaa/oxi.js.docs/blob/main/static/img/commandsFolder.png?raw=true)

### Step 3 - Create folders inside your 'commands' folder

These folders will contain all your commands, you can create any as you want!

![Command SubFolders](https://github.com/oxtaa/oxi.js.docs/blob/main/static/img/commandSubFolders.png?raw=true)

### Step 4 - Create a file ended in .js extension

That file will contain your file's code

#### Command example

```javascript title="commands/util/fileName.js"
module.exports = {
  name: "Command Name",
  aliases: ["Command Aliases"], // You can leave this empty
  code: `
  Hello, world!
  `
}
```

You can also have 2 or more commands in the same file like this:

```javascript title="commands/util/multipleCommands.js"
module.exports = [{
  name: "command1",
  aliases: ["Command Aliases"], // You can leave this empty
  code: `
  Hello, world!
  `
},{
  name: "command2",
  aliases: ["cmd2"],
  code: `
  Hello again!
  `
}]
```
