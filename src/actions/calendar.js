import {v4 as uuid} from 'uuid'

export const loadMeetingsAction = payload => {
    console.log(payload)
    return {
        type: 'loadMeet',
        payload,
    }
}

export const saveMeetingsAction = payload => {
    return {
        type: 'saveMeet',
        payload: {
            id: uuid(),
            ...payload
        },
    }
}

export const removeMeetingsAction = payload => {
    return {
        type: 'removeMeet',
        payload: {
            payload
        },
    }
}
