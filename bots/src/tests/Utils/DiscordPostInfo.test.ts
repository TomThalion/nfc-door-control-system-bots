import {DiscordPostInfo} from "../../lib/Utils/DiscordPostInfo";

/**
 * Test for DiscordPostInfo
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postInfo: DiscordPostInfo;
let webhook: string = "webhook";
let channel: string = "channel";
let username: string = "username";



beforeEach(() => {
    postInfo = new DiscordPostInfo(channel, username, webhook);
});


test("getUsername", () => {
    expect(postInfo.getUsername()).toEqual(username);
});


test("getChannel", () => {
    expect(postInfo.getChannel()).toEqual(channel);
});


test("getWebhook", () => {
    expect(postInfo.getWebhook()).toEqual(webhook);
});
