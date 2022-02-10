import React from'react';
import Button from './../Button/Button';
import StyledCalendarItem from './CalendarItem.styled';

const CalendarItem = ({meetings}) => {
    const now = new Date().getTime();
    return(
        <>
            {meetings.map(({id, date, email, time, firstName, lastName})=><li underline={Date.parse(date)-now < 43200000 ? 1 : null} key={id}><span>{date}</span> godz.: {time}=><a href={`mailto: ${email}`}>{firstName} {lastName}</a> <Button>X</Button></li>)}
        </>
    )
}

export default CalendarItem;