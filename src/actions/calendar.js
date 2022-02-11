
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

const removeMeetingsAction = id => {
    return {
        type: 'removeMeet',
        payload:{
            id: id
        }
    }
}

export {saveMeetingsAction, loadMeetingsAction, removeMeetingsAction}

