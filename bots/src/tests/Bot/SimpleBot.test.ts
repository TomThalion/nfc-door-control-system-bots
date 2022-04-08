import {TestPoster} from "../../testlib/Poster/TestPoster";
import {SimpleBot} from "../../lib/Bot/SimpleBot";
import {TestRouter} from "../../testlib/Router/TestRouter";
import {Port} from "../../../../shared/utilities/src/Port";

/**
 * Test for SimpleBot
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let poster: TestPoster;
let bot: SimpleBot;
let router: TestRouter;
beforeEach(() => {
    poster = new TestPoster();
    router = new TestRouter();
    bot = new SimpleBot(poster, router);
});


test("TestStopBottng", () => {
    expect(router.getListening()).toEqual(false);
    bot.stopBotting();
    expect(router.getListening()).toEqual(false);
    bot.startBotting();
    expect(router.getListening()).toEqual(true);
    bot.stopBotting();
    expect(router.getListening()).toEqual(false);
});


test("TestDoorOnStartBotting", () => {
    router.listen();
    bot.startBotting();
    expect(poster.getDoorCounter()).toEqual(1);
    bot.startBotting();
    expect(poster.getDoorCounter()).toEqual(2);
    bot.stopBotting()
    expect(router.getListening()).toEqual(false);
});


test("TestBellOnStartBotting", () => {
    router.listen();
    bot.startBotting();
    expect(poster.getBellCounter()).toEqual(1);
    bot.startBotting();
    expect(poster.getBellCounter()).toEqual(2);
    bot.stopBotting()
    expect(router.getListening()).toEqual(false);
});


test("TestDoorAndBell", () => {
    router.listen();
    bot.startBotting();
    expect(poster.getDoorCounter()).toEqual(1);
    expect(poster.getBellCounter()).toEqual(1);
    bot.startBotting();
    expect(poster.getDoorCounter()).toEqual(2);
    expect(poster.getBellCounter()).toEqual(2);
    bot.stopBotting()
    expect(router.getListening()).toEqual(false);
});