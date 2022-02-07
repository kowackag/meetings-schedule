import Calendar from './../components/Calendar';

export const loadMeetingsAction = payload => {
    return {
        type: 'load',
        payload,
    }
}

export const saveMeetingsAction = payload => {
    return {
        type: 'save',
        payload,
    }

}