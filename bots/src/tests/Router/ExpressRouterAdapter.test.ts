import {ExpressRouterAdapter} from "../../lib/Router/ExpressRouterAdapter";
import * as request from "supertest";
import {Port} from "../../../../shared/utilities/src/Port";

/**
 * Test of Router
 *
 * @author Tom Gaßmann
 * @version 1.0
 */

let postCount: number;
let router: ExpressRouterAdapter;
let count: number = 0;

beforeEach(() => {
    postCount = 0;
    router = new ExpressRouterAdapter(new Port(4000 + count));
    router.post("/", (reg, res) => {
        postCount++;
        res.sendStatus(200);
    });
});


test("testApiCall", async () => {
    let count = postCount;
    const response = await request(router.getApp()).post("/").send({});
    expect(response.statusCode).toBe(200);
    expect(postCount).toEqual(count + 1);
    return null;
});


test("multiApiCall", async () => {
    let i: number;
    for (i = 0; i < 10; i++) {
        const response = await request(router.getApp()).post("/").send({});
        expect(response.statusCode).toBe(200);
        expect(postCount).toEqual(i + 1);
    }
    return null;

});

test("listen and stop", () => {
    router.listen();
    router.stop();
});

afterAll(async () => {
    count++;
    await router.stop();
});
