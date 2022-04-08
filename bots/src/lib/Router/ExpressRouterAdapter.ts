import {Router} from "./Router";
import {Uri} from "../../../../shared/utilities/src/Uri";
import {Port} from "../../../../shared/utilities/src/Port";

/**
 *  A specific implementation of a Router which use an express router
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class ExpressRouterAdapter implements Router {
    private express = require('express');
    private app = this.express("3000");
    private server;
    private port: Port;

    /**
     * Constructor of an ExpressRouterAdapter object
     */
    public constructor(port: Port) {
        this.port = port;
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({extended: true}));
    }

    /**
     * Start observing the given Uri and runs the handler when a post comes in
     * @param uri given Uri to observe
     * @param handlers given handler to rum
     */
    public post(uri: Uri, handlers: (reg, res) => void): void {
        this.app.post(uri, handlers);
        // this.app.post(uri, handlers);

    }

    /**
     * starts the server which listen to the predefined gets
     */
    public listen() {
        this.server = this.app.listen(this.port.portNumber);
        console.log("Server listening on Port: " + this.port.portNumber);
    }

    /**
     * stopps the listening if listen was called before
     */
    public stop() {
        if (this.server != null) {
            this.server.close();
            console.log("server was stopped");
        }

    }

    public getApp() {
        return this.app;
    }

}