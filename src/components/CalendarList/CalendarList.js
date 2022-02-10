import React from 'react';
import { useSelector } from 'react-redux';
import StyledCalendarList from './CalendarList.styled';
import CalendarItem from '../CalendarItem/CalendarItem';

const CalendarList = () => {   
    const meetings =  useSelector(state=>state.meetings);
    const now = new Date;
    const plannedMeetings = meetings.sort( (a,b) => {return Date.parse(a.date) - Date.parse(b.date)}).filter(item=> Date.parse(item.date) >= now.getTime()-86400000);
    const pastMeetings = meetings.sort( (a,b) => {return Date.parse(b.date) - Date.parse(a.date)}).filter(item=> Date.parse(item.date)<now.getTime()-86400000);
    return(
        <StyledCalendarList>
            <section className="calendar-planned"> 
                <h3>Zbliżające się:</h3> 
                <CalendarItem meetings={plannedMeetings}/>
            </section>
            <section> 
                <h3>Zrealizowane:</h3>
                <CalendarItem className="calendar-past" meetings={pastMeetings}/>
            </section>
        </StyledCalendarList>)
}

export default CalendarList;