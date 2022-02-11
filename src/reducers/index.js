const initState = {
    meetings: [],
    editable: 0
}

const meetingReducer = ((state = initState, action) => {
    switch (action.type) {
        case 'loadMeet':
            return {...state, meetings: action.payload}
        case 'saveMeet':
            return {...state, meetings: [...state.meetings, action.payload]};
        case 'updateMeet':
            console.log(action.payload.data),
            console.log(action.payload.id)
            return {...state, 
                meetings: [...state.meetings.filter(item=> item.id !== Number(action.payload.id)), action.payload.data]};  
        case 'removeMeet':
            return {...state, 
                meetings: state.meetings.filter(item=> item.id !== Number(action.payload.id))};     
        case 'setEdit':
            return {...state, editable: Number(action.payload.id)};
        default:
            return state;
    }
})

export default meetingReducer;