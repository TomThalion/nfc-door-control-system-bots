import {PosterAbstraction} from "../Poster/PosterAbstraction"
import {Router} from "../Router/Router";

/**
 * An abstract bot, which can receive Posts from the "Midware" by
 * using the Router and posts messages according to the Posts
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export abstract class Bot {
    protected poster: PosterAbstraction;
    protected router: Router;

    /**
     * Constructor
     * @param poster the poster
     * @param router the router
     * @protected only for children
     */
    protected constructor(poster: PosterAbstraction, router: Router) {
        this.poster = poster;
        this.router = router;
    }

    /**
     * Starts the botting process
     * @return true on success, otherwise false
     */
    public abstract startBotting(): boolean;

    /**
     * stops the botting process
     */
    public abstract stopBotting(): void;


}