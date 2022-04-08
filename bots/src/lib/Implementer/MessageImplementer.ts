/**
 *  Is an interface of an MessageImplementer, which represents a message witch can be posted by itself
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export interface MessageImplementer {

    /**
     * Posts the message which is implemented
     *
     * @return return true on success otherwise false
     */
    postMessage: () => boolean;

}