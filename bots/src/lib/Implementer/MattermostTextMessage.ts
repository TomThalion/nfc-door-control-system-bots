import {MessageImplementer} from "./MessageImplementer";
import {MattermostPostInfo} from "../Utils/MattermostPostInfo";

/**
 * Special implementation of the MessageImplementer, which represents
 * a text message, which can be posted at mattermost
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

export class MattermostTextMessage implements MessageImplementer {
    private message: string;
    private postInfo: MattermostPostInfo;

    /**
     * Constructor of an MattermostTextMessage object
     *
     * @param message the message in a string
     * @param postInfo owns information which is needed for posting
     */
    constructor(message: string, postInfo: MattermostPostInfo) {
        this.message = message;
        this.postInfo = postInfo;
    }

    /**
     * Posts the text message at mattermost
     *
     * @return true on success, otherwise false
     */
    public postMessage(): boolean {
        if(this.message == undefined) {
            console.log("Your message is undefined pleas define a message");
            return false;
        }
        if(this.postInfo == undefined) {
            console.log("The postinfo is undefined pleas define it");
            return false;
        }
        //console.log(this.message);

        let Mattermost = require("node-mattermost");
        let mattermost = new Mattermost(this.postInfo.getHookUrl(), null);
        //console.log("TextMessage");
            mattermost.send({
                text: this.message,
                channel: this.postInfo.getChannel(),
                username: this.postInfo.getUsername()
            });
        return true;
    }
}

