import React from 'react';
import { useSelector } from 'react-redux';
import StyledCalendarList from './CalendarList.styled';
import CalendarItem from '../CalendarItem/CalendarItem';
import {getPastMeetings, getPlannedMeetings} from './../../helpers'

const CalendarList = ({removeMeeting}) => {   
    const meetings =  useSelector(state=>state.meetings);
    const plannedMeetings = getPlannedMeetings(meetings);
    const pastMeetings = getPastMeetings(meetings);
     
    return(
        <StyledCalendarList>
            <section className="calendar-planned"> 
                <h3 className="calendar-subtitle">Zaplanowane:</h3> 
                <ul><CalendarItem meetings={plannedMeetings} edit={true} removeMeeting={removeMeeting}/></ul>
            </section>
            <section className="calendar-past"> 
                <h3 className="calendar-subtitle">Zrealizowane:</h3>
                <ul></ul><CalendarItem meetings={pastMeetings} removeMeeting={removeMeeting}/>
            </section>
        </StyledCalendarList>)
}

export default CalendarList;