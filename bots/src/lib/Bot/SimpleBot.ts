import {Bot} from "./Bot";
import {PosterAbstraction} from "../Poster/PosterAbstraction";
import {Router} from "../Router/Router";

/**
 * An  implementation of a Simple bot .
 * It uses a Poster to Post messages at a platform specified by the poster
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class SimpleBot extends Bot {
    /**
     * Constructor of an SimpleBot object
     * @param router the router which receives posts
     * @param poster the used MattermostPoster object
     */
    constructor(poster: PosterAbstraction, router: Router) {
        super(poster, router);
    }

    /**
     * Starts the botting process
     * @return true on success, otherwise false
     */
    public startBotting(): boolean {

        this.router.post("/subscriber/door/", (reg, res) => {
                this.poster.postDoorMessage();
                res.sendStatus(200); // OK

            //console.log("Door Post");
        });

        this.router.post("/subscriber/bell/", (reg, res) => {
                this.poster.postBellMessage();
                //console.log("Bell Post");
                res.sendStatus(200); // OK
        });
        this.router.listen();
        return true;
    }

    /**
     * stopps the botting process
     */
    public stopBotting() {
        this.router.stop();
    }
}