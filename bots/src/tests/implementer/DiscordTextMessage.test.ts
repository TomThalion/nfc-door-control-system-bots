import {DiscordPostInfo} from "../../lib/Utils/DiscordPostInfo";
import {DiscordTextMessage} from "../../lib/Implementer/DiscordTextMessage";

/**
 * Testing DiscordTextMessage
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postInfo: DiscordPostInfo;
let message: DiscordTextMessage;
beforeEach(() => {

});


test("webhook undefined", () => {
    postInfo = new DiscordPostInfo("undefined", "undefined", undefined);
    message = new DiscordTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});

test("channel undefined", () => {
    postInfo = new DiscordPostInfo(undefined, "undefined", "undefined");
    message = new DiscordTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);
});

test("username undefined", () => {
    postInfo = new DiscordPostInfo("undefined", undefined, "undefined");
    message = new DiscordTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);
});

test("message undefined", () => {
    postInfo = new DiscordPostInfo("undefined", "undefined", "undefined");
    message = new DiscordTextMessage(undefined, postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});

test("postInfo undefined", () => {
    message = new DiscordTextMessage("", undefined);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});

test("everything is defined", ()=> {
    postInfo = new DiscordPostInfo("undefined", "undefined", "undefined");
    message = new DiscordTextMessage("undefined", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);

})









