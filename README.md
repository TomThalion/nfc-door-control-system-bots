# nfc-door-controll-system-bots

## About this project:
This are bots for Mattermost, Telegram and Discord. It was developt as a part of a "nfc-door-controll-system" but can also be used without the other parts of the system (Link to mainsystem: "https://github.com/l-nn-rt/nfc-door-controll-system"). 

## Functionality and how to use: 
The bots will custom textmessages, when receiving  http posts. A post at  "/subscriber/bell/" will trigger a post of the bellmessage. A post at "/subscriber/door/" will trigger a post of the doormessage. For more details lock at the section "API". Any other information you can look up in the Readme file at the "bots" directory. 

## API
### Ring the Bell 

**URL:** `/subscriber/bell/` 

**Method:** `POST`

**Authentication required:** No

**Data constraints** `{}`

#### Success Response

**Condition:** If everything is OK

**Code:** `200 OK`

**Content example** `{}`

#### Error Response

**Condition:**
Some unidentified complications

**Code:** `400 Bad Request` 

### Door has been opened
Get posted when the door gets opened by the doorcontroller

**URL:** `/subscriber/door/` 

**Method:** `POST`

**Authentication required:** No

**Data constraints** `{}`

### Success Response

**Condition:** If everything is OK

**Code:** `200 OK`

**Content example** `{}`

### Error Response

**Condition:**
Some unidentified complications

**Code:** `400 Bad Request` 

**Content:**
`{}`

