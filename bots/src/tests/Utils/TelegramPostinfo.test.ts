import {TelegramPostInfo} from "../../lib/Utils/TelegramPostInfo";

/**
 * Test for TelegramPostInfo
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postInfo: TelegramPostInfo;
let channel: string = "channel";
let telegramAuthToken: string = "telegramAuthToken";



beforeEach(() => {
    postInfo = new TelegramPostInfo(channel, telegramAuthToken);
});



test("getChannel", () => {
    expect(postInfo.getChannel()).toEqual(channel);
});


test("getTelegramAuthToken", () => {
    expect(postInfo.getTelegramAuthToken()).toEqual(telegramAuthToken);
});
