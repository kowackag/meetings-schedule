const initState = {
    meetings: [],
}

const meetingReducer = ((state = initState, action) => {
    switch (action.type) {
        case 'loadMeet':
            return {...state, meetings: action.payload}
        case 'saveMeet':
            return {...state, meetings: [...state.meetings, action.payload]};
        case 'removeMeet':
            return {...state, 
                meetings: state.meetings.filter(item=> item.id !== Number(action.payload.id))};
        default:
            return state;
    }
})

export default meetingReducer;