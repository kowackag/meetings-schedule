import React from'react';
import Button from './../Button/Button';
import StyledCalendarItem from './CalendarItem.styled';
import { useDispatch } from 'react-redux';
import {setEditableAction} from './../../actions/calendar';
import {isOngoing} from './../../helpers';

const CalendarItem = ({meetings, removeMeeting, edit}) => {
    const dispatch = useDispatch();
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
        meetings.map(({id, date, email, time, firstName, lastName})=>
            <StyledCalendarItem  underline={isOngoing(date,time)} key={id}> {date} godz.: {time}
                <a className ="link" href={`mailto: ${email}`}>{firstName} {lastName}</a> 
                <div>{edit && 
                    <Button index={id} onClick={editItem}>zmień</Button>}
                    <Button index={id} onClick={removeItem}>X</Button>
                </div>
            </StyledCalendarItem>)
    )
}

export default CalendarItem;