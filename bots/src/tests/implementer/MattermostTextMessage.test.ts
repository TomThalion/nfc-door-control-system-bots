import {MattermostPostInfo} from "../../lib/Utils/MattermostPostInfo";
import {MattermostTextMessage} from "../../lib/Implementer/MattermostTextMessage";

/**
 * Testing MattermostTextMessage
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postInfo: MattermostPostInfo;
let message: MattermostTextMessage;
beforeEach(() => {

});


test("webhook undefined", async() => {
    postInfo = new MattermostPostInfo("undefined", "undefined", undefined);
    message = new MattermostTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);
});

test("channel undefined", async() => {
    postInfo = new MattermostPostInfo(undefined, "undefined", "undefined");
    message = new MattermostTextMessage("", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);
});

test("username undefined", async () => {
    postInfo = new MattermostPostInfo("undefined", undefined, "undefined");
    message = new MattermostTextMessage("", postInfo);
     let  result: boolean =  message.postMessage();
    expect(result).toBe(true);
});

test("message undefined", async() => {
    postInfo = new MattermostPostInfo("undefined", "undefined", "undefined");
    message = new MattermostTextMessage(undefined, postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});


test("postInfo undefined", async() => {
    message = new MattermostTextMessage("", undefined);
    let  result: boolean = message.postMessage();
    expect(result).toBe(false);
});

test("everything is defined", async()=> {
    postInfo = new MattermostPostInfo("undefined", "undefined", "undefined");
    message = new MattermostTextMessage("undefined", postInfo);
    let  result: boolean = message.postMessage();
    expect(result).toBe(true);

})





