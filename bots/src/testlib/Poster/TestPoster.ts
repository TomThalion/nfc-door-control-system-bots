import {MattermostPoster} from "../../lib/Poster/MattermostPoster";

/**
 * An implementation of a Poster, which changes a counter instead of posting something for testing the SimpleBot
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class TestPoster extends MattermostPoster {

    private doorCounter:number;
    private bellCounter:number;
    /**
     * Constructor of an MattermostPoster object
     *
     */
    public constructor() {
        super(null, null, null);
        this.doorCounter = 0;
        this.bellCounter = 0;


    }

    /**
     * getter for counter
     */
    public getDoorCounter(): number {
        return this.doorCounter;
    }

    /**
     * getter for bell counter
     */
    public getBellCounter(): number {
        return this.bellCounter;
    }

    /**
     * decreases the door counter by one
     */
    public override postDoorMessage(): boolean {
        this.doorCounter++;
        return true;
    }

    /**
     * increases the counter by one
     */
    public override postBellMessage(): boolean {
        this.bellCounter++;
        return true;
    }


}