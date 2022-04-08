import {SimpleBot} from "./lib/Bot/SimpleBot";
import {ExpressRouterAdapter} from "./lib/Router/ExpressRouterAdapter";
import {BotConfig} from "./bot.config";
import {Port} from "../../shared/utilities/src/Port";
import {DiscordPostInfo} from "./lib/Utils/DiscordPostInfo";
import {DiscordTextMessage} from "./lib/Implementer/DiscordTextMessage";
import {DiscordPoster} from "./lib/Poster/DiscordPoster";

const botConfig: BotConfig = require('../config/discord.json');

/**
 * This is the DiscordMain class. Setup the Discordbotsystem with the main()
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class DiscordMain {

    private static PORT:number = 2222;
    private static theOnlyOne: DiscordMain = null;
    private bot: SimpleBot;

    /**
     * Private constructor
     * @private singleton
     */
    private constructor() {
        DiscordMain.theOnlyOne = this;

    }

    /**
     * static singleton function to get the DiscordMain object
     */
    public static getMain(): DiscordMain {
        if (this.theOnlyOne == null) {
            new DiscordMain();
        }
        return DiscordMain.theOnlyOne;
    }

    /**
     * Setup for the System
     */
    public main(): void {

        if (this.ready()) {
            // initialising the messages
            let postInfo: DiscordPostInfo = new DiscordPostInfo(botConfig.CHANNEL,
                botConfig.USERNAME, botConfig.BOT_TOKEN);

            let doorMessage: DiscordTextMessage = new DiscordTextMessage(botConfig.DOOR_TEXT, postInfo);
            let bellMessage: DiscordTextMessage = new DiscordTextMessage(botConfig.BELL_TEXT + botConfig.WEB_APP_LINK, postInfo);
            // initialising the poster
            let poster: DiscordPoster = new DiscordPoster(doorMessage, bellMessage, postInfo)
            // initialising the router
            let router: ExpressRouterAdapter = new ExpressRouterAdapter(new Port(DiscordMain.PORT));
            // initialising the bot
            this.bot = new SimpleBot(poster, router);
            //console.log("test123");
            this.bot.startBotting();
            // doorMessage.postMessage();
            //bellMessage.postMessage()
            // console.log("test456");
        }
    }

    /**
     * Parsing parameters of the config
     *
     * @private
     * @return true if every parameter is Ok, otherwise false
     */
    private ready():boolean {
        let ready: boolean = true;
        if (botConfig.BOT_TOKEN == undefined) {
            console.log("Bot token is undefined. Please define it at discord.json in the config dir\n");
            ready = false;
        } else if (botConfig.BELL_TEXT == undefined) {
            console.log("BELL_TEXT is undefined. Pleas define it at discord.json in the config dir.\n");
            ready = false;
        } else if (botConfig.DOOR_TEXT == undefined) {
            console.log("DOOR_TEXT is undefined. Pleas define it at discord.json in the config dir.\n");
            ready = false;
        } else if (botConfig.WEB_APP_LINK == undefined) {
            console.log("WEB_APP_LINK is undefined. Pleas define it at discord.json in the config dir.\n");
            ready = false;
        }
        return ready;
    }
}