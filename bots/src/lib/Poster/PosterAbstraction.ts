import {MessageImplementer} from "../Implementer/MessageImplementer";
import {PostInfo} from "../Utils/PostInfo";

/**
 * A class with two unspecified message witch can be posted.
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class PosterAbstraction {

    protected messageDoor: MessageImplementer;
    protected messageBell: MessageImplementer;
    protected postInfo: PostInfo;
    private doorDate: Date;
    private bellDate: Date;
    private doorCount: number;
    private bellCount: number;
    private static MAX_COUNT:number = 3;
    private static WAIT_TIME:number = 10;

    /**
     * Constructor of an PosterAbstraction
     * @param messageDoor message which should be posted by postDoorMessage()
     * @param messageBell message which should be posted by postBellMessage()
     * @param postInfo information about the post
     */
    constructor(messageDoor: MessageImplementer, messageBell: MessageImplementer, postInfo: PostInfo) {
        this.messageDoor = messageDoor;
        this.messageBell = messageBell;
        this.postInfo = postInfo;
        this.doorDate = new Date();
        this.bellDate = new Date();
        this.doorCount = 0;
        this.bellCount = 0;
    }

    /**
     * posts the door message
     *
     * @return returns true on success, otherwise false
     */
    public postDoorMessage(): boolean {
        //console.log("DoorPost");
        if (this.proveDoorTime()) {
            return this.messageDoor.postMessage();
        }
        return false;
    }

    /**
     * posts the bell message
     *
     * @return returns true on success, otherwise false
     */
    public postBellMessage(): boolean {
        //console.log("BellPost");
        if (this.proveBellTime()) {
            return this.messageBell.postMessage();
        }
        return false;
    }

    /**
     * Spam protection, Proves weather bell posts are made to often in the last 10 seconds
     *
     * @return true when posting bell is ok, otherwise  false
     */
    private  proveBellTime(): boolean {
        //console.log(this.bellDate);
        let d: Date = new Date();
        //console.log(d);
        if (this.bellDate.getHours() == d.getHours() && this.bellDate.getMinutes() == d.getMinutes()) {
            //console.log("test");
            //console.log(this.bellDate.getSeconds());
            //console.log(d.getSeconds())
            if (this.bellDate.getSeconds() + PosterAbstraction.WAIT_TIME > d.getSeconds()) {
                if (this.bellCount >= PosterAbstraction.MAX_COUNT) {
                    console.log("Bell Post Rate-limit reached");
                    return false;
                } else {
                    this.bellCount ++;
                    return true;
                }
            }
        }
        this.bellDate = d;
        //console.log(this.bellCount);
        this.bellCount  = 1; // reset
        //console.log(this.bellCount);
        return true;
    }

    /**
     * Spam protection, Proves weather door posts are made to often in the last 10 seconds
     *
     * @return true when posting door is ok, otherwise  false
     */
    private  proveDoorTime(): boolean {
        let d: Date = new Date();
        if (this.doorDate.getHours() == d.getHours() && this.doorDate.getMinutes() == d.getMinutes()) {
            if (this.doorDate.getSeconds() + PosterAbstraction.WAIT_TIME > d.getSeconds()) {
                if (this.doorCount >= PosterAbstraction.MAX_COUNT) {
                    console.log("Door Post Rate-limit reached");
                    return false;
                } else {
                    this.doorCount ++;
                    return true;
                }
            }
        }
        this.doorDate = d;
        this.doorCount  = 1; // reset
        return true;
    }
}