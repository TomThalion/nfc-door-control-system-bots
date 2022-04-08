import {ExpressRouterAdapter} from "./lib/Router/ExpressRouterAdapter";
import {BotConfig} from "./bot.config";
import {TelegramPostInfo} from "./lib/Utils/TelegramPostInfo";
import {TelegramTextMessage} from "./lib/Implementer/TelegramTextMessage";
import {TelegramPoster} from "./lib/Poster/TelegramPoster";
import {SimpleBot} from "./lib/Bot/SimpleBot";
import {Port} from "../../shared/utilities/src/Port";


const botConfig: BotConfig = require('../config/telegram.json');

/**
 * This is the TelegramMain class. Setup the TelegramBotsystem with the main()
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class TelegramMain {
    private static PORT:number = 1111;
    private static theOnlyOne: TelegramMain = null;
    private bot: SimpleBot;

    /**
     * Private constructor
     * @private singleton
     */
    private constructor() {
        TelegramMain.theOnlyOne = this;

    }

    /**
     * static singleton function to get the TelegramMain object
     */
    public static getMain(): TelegramMain {
        if (this.theOnlyOne == null) {
            new TelegramMain();
        }
        return TelegramMain.theOnlyOne;
    }

    /**
     * Setup for the System
     */
    public main(): void {
        if (this.ready()) {
            // initialising the messages
            let postInfo: TelegramPostInfo = new TelegramPostInfo(botConfig.CHANNEL,
                botConfig.BOT_TOKEN);

            let doorMessage: TelegramTextMessage = new TelegramTextMessage(botConfig.DOOR_TEXT, postInfo);
            let bellMessage: TelegramTextMessage = new TelegramTextMessage(botConfig.BELL_TEXT + botConfig.WEB_APP_LINK, postInfo);


            // initialising the poster
            let poster: TelegramPoster = new TelegramPoster(doorMessage, bellMessage, postInfo)
            // initialising the router
            let router: ExpressRouterAdapter = new ExpressRouterAdapter(new Port(TelegramMain.PORT));
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
    private ready(): boolean {
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
        } else if (botConfig.CHANNEL == undefined) {
            console.log("CHANNEL is undefined. Pleas define it at discord.json in the config dir.\n");
            ready = false;
        }
        return ready;
    }
}