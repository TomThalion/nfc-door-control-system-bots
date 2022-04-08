import {TelegramPostInfo} from "../../lib/Utils/TelegramPostInfo";
import {TelegramTextMessage} from "../../lib/Implementer/TelegramTextMessage";

/**
 * Testing TelegramTextMessage
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postInfo: TelegramPostInfo;
let message: TelegramTextMessage;
beforeEach(() => {

});


test("AuthToken undefined", async() => {
    postInfo = new TelegramPostInfo("undefined",  undefined);
    message = new TelegramTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);
});

test("channel undefined", async() => {
    postInfo = new TelegramPostInfo(undefined, "undefined");
    message = new TelegramTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);
});

test("message undefined", async() => {
    postInfo = new TelegramPostInfo("undefined", "undefined");
    message = new TelegramTextMessage(undefined, postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});


test("postInfo undefined", async () => {
    message = new TelegramTextMessage("", undefined);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});

test("everything is defined", async()=> {
    postInfo = new TelegramPostInfo("undefined", "undefined");
    message = new TelegramTextMessage("undefined", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);

})





