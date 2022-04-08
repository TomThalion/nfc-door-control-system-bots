import {MessageImplementer} from "./MessageImplementer";
import {TelegramPostInfo} from "../Utils/TelegramPostInfo";
process.env.NTBA_FIX_319 = "1";
const TelegramBot = require('node-telegram-bot-api');


/**
 * Special implementation of the MessageImplementer, which represents
 * a text message, which can be posted at telegram
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
 export class TelegramTextMessage implements MessageImplementer {

    private message: string;
    private postInfo: TelegramPostInfo;

    /**
     * Constructor of an TelegramTextMessage object
     *
     * @param message the message in a string
     * @param postInfo owns information which is needed for posting
     */
    constructor(message: string, postInfo: TelegramPostInfo) {
        this.message = message;
        this.postInfo = postInfo;
    }


    /**
     * Posts the text message at telegram
     *
     * @return true on success, otherwise false
     */
    public postMessage() : boolean {
        if(this.message == undefined) {
            console.log("Your message is undefined pleas define a message")
            return false;
        }
        if(this.postInfo == undefined) {
            console.log("The postinfo is undefined pleas define it");
            return false;
        }

            var bot = new TelegramBot(this.postInfo.getTelegramAuthToken());
            bot.sendMessage(this.postInfo.getChannel(), this.message);

        return true;
    }

}