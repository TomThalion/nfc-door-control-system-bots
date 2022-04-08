import {PosterAbstraction} from "./PosterAbstraction";
import {MattermostTextMessage} from "../Implementer/MattermostTextMessage";
import {MattermostPostInfo} from "../Utils/MattermostPostInfo";

/**
 * An implementation of a Poster, which post some textmessages at mattermost
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class MattermostPoster extends PosterAbstraction {

    /**
     * Constructor of an MattermostPoster object
     * @param messageDoor message which should be posted by postDoorMessage()
     * @param messageBell message which should be posted by postBellMessage()
     * @param postInfo info for posting on mattermost
     *
     */
    constructor(messageDoor: MattermostTextMessage, messageBell: MattermostTextMessage, postInfo: MattermostPostInfo) {
        super(messageDoor, messageBell, postInfo)
    }
}