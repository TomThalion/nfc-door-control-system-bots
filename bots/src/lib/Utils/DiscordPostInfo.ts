import {PostInfo} from "./PostInfo";

/**
 * Info for a post at discord
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class DiscordPostInfo extends PostInfo {

    private channel: string;
    private webhook: string;
    private username: string;

    public constructor(channel: string, username: string, webhook: string) {
        super();
        this.channel = channel;
        this.webhook = webhook;
        this.username = username;
    }

    public getChannel(): string {
        return this.channel;
    }

    public getWebhook(): string {
        return this.webhook;
    }

    public getUsername(): string {
        return this.username;
    }


}