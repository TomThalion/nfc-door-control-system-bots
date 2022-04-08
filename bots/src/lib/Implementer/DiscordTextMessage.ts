import {MessageImplementer} from "./MessageImplementer";
import {DiscordPostInfo} from "../Utils/DiscordPostInfo";

/**
 * Special implementation of the MessageImplementer, which represents
 * a text message, which can be posted at discord
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class DiscordTextMessage implements MessageImplementer {

    private message: string;
    private postInfo: DiscordPostInfo;

    /**
     * Constructor of an DiscordTextMessage object
     *
     * @param message the message in a string
     * @param postInfo owns information which is needed for posting
     */
    constructor(message: string, postInfo: DiscordPostInfo) {
        this.message = message;
        this.postInfo = postInfo;
    }

    /**
     * Posts the text message at discord
     *
     * @return true on success, otherwise false
     */
    public postMessage(): boolean {

        if(this.message == undefined) {
            console.log("Your message is undefined pleas define a message")
            return false;
        }
        const hookcord = require('hookcord');
        const Hook = new hookcord.Hook();
        let split
        let id;
        let secret;
        try {
            split = this.postInfo.getWebhook().split("/");
            id = split[split.length - 2];
            secret = split[split.length - 1];
        } catch (error) {
            console.log("Unable to convert the webhook, please check if your webhook is correct");
            return false;
        }
        //console.log(split);
        //console.log(id);
        //console.log(secret);

        Hook.login(id, secret);
        Hook.setPayload({
            "content": this.message,
        })

        Hook.fire();

        return true;
    }

}