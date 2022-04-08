import {MattermostMain} from "./MattermostMain";
import {TelegramMain} from "./TelegramMain";
import {DiscordMain} from "./DiscordMain";
import {BotConfig} from "./bot.config";
const botConfig: BotConfig = require('../config/plattform.json');
//console.log(botConfig.BOT_TYPE);

var telegramMain: TelegramMain = TelegramMain.getMain();
var discordMain: DiscordMain = DiscordMain.getMain();
var mattermostMain: MattermostMain = MattermostMain.getMain();

switch (botConfig.BOT_TYPE) {
    case "TELEGRAM" :
        telegramMain.main();
        break;
    case "DISCORD" :
        discordMain.main();
        break;
    case "MATTERMOST":
        mattermostMain.main();
        break;
    default:
        mattermostMain.main();
        telegramMain.main();
        discordMain.main();
        break;
}





