import {v4 as uuid} from 'uuid'

const loadMeetingsAction = payload => {
    return {
        type: 'loadMeet',
        payload,
    }
}

const saveMeetingsAction = payload => {
    return {
        type: 'saveMeet',
        payload
    }
}

export {saveMeetingsAction, loadMeetingsAction}
// export const removeMeetingsAction = payload => {
//     return {
//         type: 'removeMeet',
//         payload: {
//             payload
//         },
//     }
// }
