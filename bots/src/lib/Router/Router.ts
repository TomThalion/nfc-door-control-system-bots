import {Uri} from "../../../../shared/utilities/src/Uri";
import {Port} from "../../../../shared/utilities/src/Port";

/**
 * Is an inteface of an Router. The Router receives posts and run specific handlers as reaction
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export interface Router {

    /**
     * Start observing the given Uri and runs the handler when a post comes in
     * @param uri given Uri to observe
     * @param handlers given handler to rum
     */
    post: (uri:Uri, handlers: (req, res) => void) => void;

    /**
     * Starts the server with all gets applied before
     */
    listen: () => void;

    /**
     * stops the routing
     */
    stop:() => void;

}