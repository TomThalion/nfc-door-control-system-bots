import {MattermostPoster} from "../../lib/Poster/MattermostPoster";
import {TestMMessage} from "../../testlib/Implementer/TestMMessage";

/**
 * Testing the MattermostPoster/PosterAbstraction
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let poster: MattermostPoster;
let doorMessage: TestMMessage;
let bellMessage: TestMMessage;
jest.setTimeout(40000);
beforeEach(() => {
    doorMessage = new TestMMessage();
    bellMessage = new TestMMessage();
    poster = new MattermostPoster(doorMessage, bellMessage, null);
});


test("OneDoorPost", () => {
    poster.postDoorMessage();
    expect(doorMessage.getPostCount()).toEqual(1);
});


test("ManyDoorPosts", async() => {
    let i: number;
    for (i = 0; i < 10; i++) {
        poster.postDoorMessage();
    }
    expect(doorMessage.getPostCount()).toEqual(3); //Post limit reached
    await new Promise((r) => setTimeout(r,10000));
    for (i = 0; i < 3; i++) {
        poster.postDoorMessage();
    }
    expect(doorMessage.getPostCount()).toEqual(6);
});


test("OneBellPosts", () => {
    poster.postBellMessage();
    expect(bellMessage.getPostCount()).toEqual(1);
});


test("ManyBellPosts", async () => {
    let i: number;
    for (i = 0; i < 10; i++) {
        poster.postBellMessage();
    }
    expect(bellMessage.getPostCount()).toEqual(3); // Post limit reached
    await new Promise((r) => setTimeout(r,10000));
    for (i = 0; i < 3; i++) {
        poster.postBellMessage();
    }
    expect(bellMessage.getPostCount()).toEqual(6);
});


test("combinedPosts", async() => {
    let i: number;
    let j: number;
    for (i = 0; i < 3; i++) {
        poster.postBellMessage();
    }
    expect(bellMessage.getPostCount()).toEqual(3);
    expect(doorMessage.getPostCount()).toEqual(0);
    for (j = 0; j < 3; j++) {
        poster.postDoorMessage();
    }
    expect(bellMessage.getPostCount()).toEqual(3);
    expect(doorMessage.getPostCount()).toEqual(3);
    await new Promise((r) => setTimeout(r,10000));
    for (i = 0; i < 3; i++) {
        poster.postBellMessage();
        poster.postDoorMessage();
    }
    expect(bellMessage.getPostCount()).toEqual(6);
    expect(doorMessage.getPostCount()).toEqual(6);
});



