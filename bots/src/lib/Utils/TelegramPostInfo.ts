import {PostInfo} from "./PostInfo";

/**
 * Info for a post at telegram
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class TelegramPostInfo extends PostInfo {

    private channel: string;
    private telegramAuthToken: string;


    public constructor(channel: string, telegramAuthToken: string) {
        super();
        this.channel = channel;
        this.telegramAuthToken = telegramAuthToken;
    }

    public getChannel(): string {
        return this.channel;
    }



    public getTelegramAuthToken(): string {
        return this.telegramAuthToken;
    }


}