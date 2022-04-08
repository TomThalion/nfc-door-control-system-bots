import {PosterAbstraction} from "./PosterAbstraction";
import {TelegramTextMessage} from "../Implementer/TelegramTextMessage";
import {TelegramPostInfo} from "../Utils/TelegramPostInfo";

/**
 * An implementation of a Poster, which post some textmessages at telegram
 *
 * @author Tom Gaßmann
 * @version 1.0
 */
export class TelegramPoster extends PosterAbstraction {

    /**
     * Constructor of an TelegramPoster object
     * @param messageDoor message which should be posted by postDoorMessage()
     * @param messageBell message which should be posted by postBellMessage()
     * @param postInfo info for posting on mattermost
     *
     */
    constructor(messageDoor: TelegramTextMessage, messageBell: TelegramTextMessage, postInfo: TelegramPostInfo) {
        super(messageDoor, messageBell, postInfo)
    }
}