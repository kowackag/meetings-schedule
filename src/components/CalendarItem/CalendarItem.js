import React from'react';
import Button from './../Button/Button';
import StyledCalendarItem from './CalendarItem.styled';
import { useDispatch } from 'react-redux';
import {setEditableAction} from './../../actions/calendar'

const CalendarItem = ({meetings, removeMeeting}) => {
    const dispatch = useDispatch();
    const now = new Date().getTime();
    const removeItem = (e) => {
        e.preventDefault();
        const ind = e.target.dataset.index;
        removeMeeting(ind);
    }

    const editItem = (e) => {
        e.preventDefault();
        const ind = e.target.dataset.index;
        dispatch(setEditableAction(ind));
    }

    return(
        meetings.map(({id, date, email, time, firstName, lastName})=><StyledCalendarItem  underline={Date.parse(date+ " " + time)-now < 86400000 && Date.parse(date+ " " + time) > now ? 1 : null} key={id}> {date} godz.: {time}<a className ="link" href={`mailto: ${email}`}>{firstName} {lastName}</a> 
        <div><Button index={id} onClick={editItem}>zmień</Button>
        <Button index={id} onClick={removeItem}>X</Button></div></StyledCalendarItem>)
    )
}

export default CalendarItem;