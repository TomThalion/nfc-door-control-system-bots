import {PostInfo} from "./PostInfo";

/**
 * Info for a post at mattermost
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class MattermostPostInfo extends PostInfo {

    private channel: string;
    private username: string;
    private hookUrl: string;


    public constructor(channel: string, username: string, hookUrl: string) {
        super();
        this.channel = channel;
        this.username = username;
        this.hookUrl = hookUrl;
    }

    public getChannel(): string {
        return this.channel;
    }

    public getUsername(): string {
        return this.username;
    }

    public getHookUrl(): string {
        return this.hookUrl;
    }


}