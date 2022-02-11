import React from 'react';
import { useSelector } from 'react-redux';
import StyledCalendarList from './CalendarList.styled';
import CalendarItem from '../CalendarItem/CalendarItem';

const CalendarList = ({removeMeeting}) => {   
    const meetings =  useSelector(state=>state.meetings);
    const now = new Date;
    const plannedMeetings = meetings.sort( (a,b) => {return Date.parse(a.date+" "+a.time) - Date.parse(b.date+" " +b.time)}).filter(item=> Date.parse(item.date + " " +item.time) >= now.getTime());
    const pastMeetings = meetings.sort( (a,b) => {return Date.parse(b.date+" " +b.time) - Date.parse(a.date+" "+a.time)}).filter(item=> Date.parse(item.date + " " +item.time)<now.getTime());
     
    return(
        <StyledCalendarList>
            <section className="calendar-planned"> 
                <h3 className="calendar-subtitle">Zaplanowane:</h3> 
                <ul><CalendarItem meetings={plannedMeetings} removeMeeting={removeMeeting}/></ul>
            </section>
            <section className="calendar-past"> 
                <h3 className="calendar-subtitle">Zrealizowane:</h3>
                <ul></ul><CalendarItem  meetings={pastMeetings} removeMeeting={removeMeeting}/>
            </section>
        </StyledCalendarList>)
}

export default CalendarList;