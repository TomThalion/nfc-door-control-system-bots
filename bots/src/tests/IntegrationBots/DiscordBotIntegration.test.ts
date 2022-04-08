import {SimpleBot} from "../../lib/Bot/SimpleBot";
import {Port} from "../../../../shared/utilities/src/Port";
import {TestDMessage} from "../../testlib/Implementer/TestDMessage";
import {DiscordPoster} from "../../lib/Poster/DiscordPoster";
import {ExpressRouterAdapter} from "../../lib/Router/ExpressRouterAdapter";
import * as request from "supertest";

/**
 * Integration Test for DiscordBot
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let poster: DiscordPoster;
let bot: SimpleBot;
let router: ExpressRouterAdapter;
let doorMessage: TestDMessage;
let bellMessage: TestDMessage;
let count: number = 0;

jest.setTimeout(30000);

beforeEach(() => {
    doorMessage = new TestDMessage();
    bellMessage = new TestDMessage();
    poster = new DiscordPoster(doorMessage, bellMessage, undefined)
    router = new ExpressRouterAdapter(new Port(3000 + count));
    bot = new SimpleBot(poster, router);
    bot.startBotting();
});


test("Test one post DoorMessage", async () => {
    const response = await request(router.getApp()).post("/subscriber/door/").send({});
    expect(response.statusCode).toBe(200);
    expect(doorMessage.getPostCount()).toEqual(1);
});

test("Test one post BellMessage", async () => {
    const response = await request(router.getApp()).post("/subscriber/bell/").send({});
    expect(response.statusCode).toBe(200);
    expect(bellMessage.getPostCount()).toEqual(1);
});

test("Test many post DoorMessage", async () => {
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/door/").send({});
        expect(response.statusCode).toBe(200);
        expect(doorMessage.getPostCount()).toEqual(i);
    }
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/door/").send({});
        expect(response.statusCode).toBe(200);
        expect(doorMessage.getPostCount()).toEqual(3);
    }
    await new Promise((r) => setTimeout(r, 10000));
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/door/").send({});
        expect(response.statusCode).toBe(200);
        expect(doorMessage.getPostCount()).toEqual(i + 3);
    }
});

test("Test many post BellMessage", async () => {
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/bell/").send({});
        expect(response.statusCode).toBe(200);
        expect(bellMessage.getPostCount()).toEqual(i);
    }
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/bell/").send({});
        expect(response.statusCode).toBe(200);
        expect(bellMessage.getPostCount()).toEqual(3);
    }
    await new Promise((r) => setTimeout(r, 10000));
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/bell/").send({});
        expect(response.statusCode).toBe(200);
        expect(bellMessage.getPostCount()).toEqual(i + 3);
    }
});

test("Test combined post Bell and door ", async () => {
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/bell/").send({});
        expect(response.statusCode).toBe(200);
        expect(bellMessage.getPostCount()).toEqual(i);
        expect(doorMessage.getPostCount()).toEqual(0);
    }
    for (let i = 1; i < 4; i++) {
        const response = await request(router.getApp()).post("/subscriber/door/").send({});
        expect(response.statusCode).toBe(200);
        expect(doorMessage.getPostCount()).toEqual(i);
        expect(bellMessage.getPostCount()).toEqual(3);
    }
});


afterEach(async () => {
    count++;
    await bot.stopBotting();
})