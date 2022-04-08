import {PosterAbstraction} from "./PosterAbstraction";
import {DiscordTextMessage} from "../Implementer/DiscordTextMessage";
import {DiscordPostInfo} from "../Utils/DiscordPostInfo";

/**
 * An implementation of a Poster, which post some textmessages at discord
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class DiscordPoster extends PosterAbstraction {

    /**
     * Constructor of an DiscordPoster object
     * @param messageDoor message which should be posted by postDoorMessage()
     * @param messageBell message which should be posted by postBellMessage()
     * @param postInfo info for posting on mattermost
     *
     */
    constructor(messageDoor: DiscordTextMessage, messageBell: DiscordTextMessage, postInfo: DiscordPostInfo) {
        super(messageDoor, messageBell, postInfo)
    }
}