import React from'react';
import Button from './../Button/Button';
import StyledCalendarItem from './CalendarItem.styled';

const CalendarItem = ({meetings, removeMeeting}) => {
    const now = new Date().getTime();
    const removeItem = (e) => {
        e.preventDefault();
        const ind = e.target.dataset.index;
        removeMeeting(ind);
    }

    return(
        meetings.map(({id, date, email, time, firstName, lastName})=><StyledCalendarItem  underline={Date.parse(date+ " " + time)-now < 86400000 && Date.parse(date+ " " + time) > now ? 1 : null} key={id}> {date} godz.: {time}<a className ="link" href={`mailto: ${email}`}>{firstName} {lastName}</a> <Button index={id} onClick={removeItem}>X</Button></StyledCalendarItem>)
    )
}

export default CalendarItem;