import {Router} from "../../lib/Router/Router";
import {Uri} from "../../../../shared/utilities/src/Uri";
import {Port} from "../../../../shared/utilities/src/Port";

/**
 * An implementation of an Router which is used to test the bot
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class TestRouter implements Router {
    private listening: boolean;

    /**
     * constructor of an TestRouter
     */
    public constructor() {
        this.listening = false;
    }

    /**
     * calls the handler if the TestRouter is listening
     * @param uri
     * @param handlers
     */
    public post(uri: Uri, handlers: (reg, res) => void): void {
        if(this.listening) {
            handlers(null , new res());
        }
    }

    /**
     * starts listening
     * @param port useless
     */
    public listen() {
        this.listening = true;
    }

    /**
     * stops listening
     */
    public stop() {
        this.listening = false;
    }

    public getListening(): boolean {
        return this.listening;
    }
}

/**
 * res which do nothing to avoid null pointer exception
 */
class res {
        public sendStatus(status:number): void {
            return;
        }
    }