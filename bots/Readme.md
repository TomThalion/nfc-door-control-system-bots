# Bot manual

This is the manual for the eventsubscriber bots. Learn how to setUp this subsystem and how to configure the bot to post text messages to one of the following platforms when a Door Post or Bell Post has been received. 

## Setup
To run the Bots, you have to install node, node-ts and node-ts-dev, because of Typescript. After that I recommand you to install an IDE like webstorm from jetbrains. As next step you have to run "npm install" in the directory bots. As next step you have to run "npm install node-ts-dev". Now you can execute the Bots by the command "npm start". Its important that SharedUtils is at the same relative path as on our gitHub otherwise it will not find the classes which are from there.
Every ".json" file you will edit is located in the "config" Directory.

In any case you have to edit the "plattform.json". Here is only one iteme place: "BOT_TYPE" for eache Plattform there is an name tag. You only have to fill in the tag of the plattform you want to use. The next step is to edit the .json which belogs to your desired plattform.f you deside to use all plattforms, you can leave the "plattform.json" empty (empty body is required).

## Discord
**name tag:** "DISCORD"

**config filename:** "discord.json"

**Configfile layout:**
```json
{
    "BOT_TOKEN" : "<discord webhook>",
    "WEB_APP_LINK" : "<Link to the webapp of the system>",
    "DOOR_TEXT" : "<Door message>",
    "BELL_TEXT" : "<Bell message>"
}
```

"DOOR_TEXT" and "BELL_TEXT" are the messages which getting posted if an Door Post/Bell Post has been received. You can put your Individual text there, but only up to 100 characters are officially supported for each  message. "WEB_APP_LINK" is a additional string which get append to "BELL_TEXT", and should used to add an link for the web app of the system to these post. If you don't need the additional link, insert an empty string.

"BOT_TOKEN" is an webhook you can get for an chanell on your discord server. Without this, no message posts are possible. 

## Telegram
**name tag:** "TELEGRAM"

**config filename:** "discord.json"

**Configfile layout:**
```json
{
    "CHANNEL" : "<Chat_Id>",
    "BOT_TOKEN" : "<Telegramm Authentification Token>",
    "WEB_APP_LINK" : "<Link to the webapp of the system>",
    "DOOR_TEXT" : "<Door message>",
    "BELL_TEXT" : "<Bell message>"
}
```

"DOOR_TEXT" and "BELL_TEXT" are the messages which getting posted if an Door Post/Bell Post has been received. You can put your Individual text there, but only up to 100 characters are officially supported for each  message. "WEB_APP_LINK" is a additional string which get append to "BELL_TEXT", and should used to add an link for the web app of the system to these post. If you don't need the additional link, insert an empty string.

"BOT_TOKEN" is a token, which you can get form the Telegramm-BotFather. With the BotFather you can generate your own bot account on Telegram, which can be added to chats and groups. More information on Telegramm Website at BotFather. 

"CHANNEL" is the id of the chat you want to post in. there are different possibilities to get the id of your chat. One simple methode is to add the Public bot @getidsbot to your group.

## Mattermost
**name tag:** "MATTERMOST"

**config filename:** "discord.json"

**Configfile layout:**
```json
{
    "CHANNEL" : "<Group or chat name>",
    "BOT_TOKEN" : "<mattermost webhook>",
    "WEB_APP_LINK" : "<Link to the webapp of the system>",
    "DOOR_TEXT" : "<Door message>",
    "BELL_TEXT" : "<Bell message>"
}
```

"DOOR_TEXT" and "BELL_TEXT" are the messages which getting posted if an Door Post/Bell Post has been received. You can put your Individual text there, but only up to 100 characters are officially supported for each  message. "WEB_APP_LINK" is a additional string which get append to "BELL_TEXT", and should used to add an link for the web app of the system to these post. If you don't need the additional link, insert an empty string.

"BOT_TOKEN" is a webhook you can get for an chanell on your mattermost server. Without this, no message posts are possible. 

"CHANNEL" is the name of the chanel you want to post in. You also have to note the channel, while generating the webhook. More informations on Mattermost website at webhooks. 

## Need to know:
Every entri in the .json files, which aren't mentioned yet, are irrelevant for the bot configuration and should set to an empty string "".
Each errormessages is output via the command line.
