const initState = {
    meetings: [],
}

// const initState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     date: '',
//     time: '',
//     errors: [],
// }

const meetingReducer = ((state = initState, action) => {
    switch (action.type) {
        case 'load':
            return {}
        case 'add':
            return {...state, meetings: [...state.meetings, action.payload]};
        default:
            return state;
    }
})

export default meetingReducer;