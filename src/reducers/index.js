const initState = {
    meetings: [],
}

const meetingReducer = ((state = initState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'loadMeet':
            return {...state, meetings: action.payload}
        case 'saveMeet':
            return {...state, meetings: [...state.meetings, action.payload]};
        case 'removeMeet':
            return {...state, 
                meetings: state.meetings.filter(item=> item.id !== action.payload.id)};
        default:
            return state;
    }
})

export default meetingReducer;