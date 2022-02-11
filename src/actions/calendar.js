
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

const updateMeetingAction = (id,data) => {
    return {
        type: 'updateMeet',
        payload:{
            id: id,
            data: data
        }
    }
}

const setEditableAction = (id) => {
    return {
        type: 'setEdit',
        payload:{
            id: id
        }
    }
}


export {saveMeetingsAction, loadMeetingsAction, removeMeetingsAction, updateMeetingAction, setEditableAction}

