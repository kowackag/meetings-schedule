import React from'react';
import Button from './../Button/Button';
import StyledCalendarItem from './CalendarItem.styled';

const CalendarItem = ({meetings, className}) => {
    return(
        <StyledCalendarItem className={className}>
            {meetings.map(({id, date, email, time, firstName, lastName})=><li key={id}><span>{date}</span> godz.: {time}=><a href={`mailto: ${email}`}>{firstName} {lastName}</a> <Button>X</Button></li>)}
        </StyledCalendarItem>
    )
}

export default CalendarItem;