import {MattermostTextMessage} from "../../lib/Implementer/MattermostTextMessage";

/**
 * A special MattermostTextMessage which is used for testing the mattermost poster
 * It increases an postCount instead of do real postings
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class TestMMessage extends MattermostTextMessage {

    private postCount: number;

    /**
     * constructor of a TestMMessage
     */
    constructor() {
        super(null, null);
        this.postCount = 0;
    }

    /**
     * post test message
     */
    public override postMessage(): boolean {
        this.postCount++;
        return true;
    }

    /**
     * getter for postCount
     */
    public getPostCount(): number {
        return this.postCount;
    }
}