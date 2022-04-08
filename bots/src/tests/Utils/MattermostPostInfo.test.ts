import {MattermostPostInfo} from "../../lib/Utils/MattermostPostInfo";

/**
 * Test for MattermostPostInfo
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postInfo: MattermostPostInfo;
let hookUrl: string = "hookUrl";
let channel: string = "channel";
let username: string = "username";



beforeEach(() => {
    postInfo = new MattermostPostInfo(channel, username, hookUrl);
});


test("getUsername", () => {
    expect(postInfo.getUsername()).toEqual(username);
});


test("getChannel", () => {
    expect(postInfo.getChannel()).toEqual(channel);
});


test("getHookUrl", () => {
    expect(postInfo.getHookUrl()).toEqual(hookUrl);
});
