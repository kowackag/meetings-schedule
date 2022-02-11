import React, {useEffect} from 'react';
import {loadMeetingsAction, saveMeetingsAction, removeMeetingsAction} from './../actions/calendar'
import CalendarList from './../components/CalendarList/CalendarList'
import CalendarForm from './../components/CalendarForm/CalendarForm';
import CalendarApi from './../providers/CalendarAPI';
import {useDispatch } from 'react-redux';

const db =  new CalendarApi();
const [loadMeetingsFromApi, sendMeetingToApi, removeMeetingFromApi]= db;

const Calendar = () => {
    const dispatch = useDispatch();
    const sendMeeting = (meetingData) => {
        sendMeetingToApi(meetingData)
            .then(resp=>dispatch(saveMeetingsAction(resp)))
            .catch(err => {
                console.error(err);
            });
    }

    const removeMeeting = (id) => {
        removeMeetingFromApi(id)
            .then(()=>dispatch(removeMeetingsAction(id)))
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => 
        loadMeetingsFromApi()
            .then(resp => dispatch(loadMeetingsAction(resp)))
            .catch(err => {
                console.error(err);
            }),[]
    )

    return (
        <section>
            <CalendarList removeMeeting={removeMeeting}/>
            <CalendarForm saveMeetings={sendMeeting}/>
        </section>
    )
}

export default Calendar;