import {SimpleBot} from "./lib/Bot/SimpleBot";
import {ExpressRouterAdapter} from "./lib/Router/ExpressRouterAdapter";
import {MattermostPostInfo} from "./lib/Utils/MattermostPostInfo";
import {MattermostPoster} from "./lib/Poster/MattermostPoster";
import {MattermostTextMessage} from "./lib/Implementer/MattermostTextMessage";
import {BotConfig} from "./bot.config";
import {Port} from "../../shared/utilities/src/Port";

const botConfig: BotConfig = require('../config/mattermost.json');

/**
 * This is the MattermostMain class. Setup the MattermostBotsystem with the main()
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class MattermostMain {
    private static PORT:number = 3333;
    private static theOnlyOne: MattermostMain = null;
    private bot: SimpleBot;

    /**
     * Private constructor
     * @private singleton
     */
    private constructor() {
        MattermostMain.theOnlyOne = this;

    }

    /**
     * static singleton function to get the MattermostMain object
     */
    public static getMain(): MattermostMain {
        if (this.theOnlyOne == null) {
            new MattermostMain();
        }
        return MattermostMain.theOnlyOne;
    }

    /**
     * Setup for the System
     */
    public main(): void {

        if (this.ready()) {
            // initialising the messages
            let postInfo: MattermostPostInfo = new MattermostPostInfo(botConfig.CHANNEL,
                botConfig.USERNAME, botConfig.BOT_TOKEN);
            let doorMessage: MattermostTextMessage = new MattermostTextMessage(botConfig.DOOR_TEXT, postInfo);
            let bellMessage: MattermostTextMessage = new MattermostTextMessage(botConfig.BELL_TEXT + botConfig.WEB_APP_LINK, postInfo);
            // initialising the poster
            let poster: MattermostPoster = new MattermostPoster(doorMessage, bellMessage, postInfo)
            // initialising the router
            let router: ExpressRouterAdapter = new ExpressRouterAdapter(new Port(MattermostMain.PORT));
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
        } else if(botConfig.CHANNEL == undefined) {
            console.log("CHANNEL is undefined. Pleas define it at discord.json in the config dir.\n");
            ready = false;
        }
        return ready;
    }


}