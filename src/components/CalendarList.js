import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button/Button';
import StyledCalendarList from './CalendarList.styled'

const CalendarList = () => {   
    const meetings =  useSelector(state=>state.meetings);
    const sortedArray = meetings.sort( (a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    const now = new Date(3)
    return(
        <StyledCalendarList>
            <section className="calendar-planned"> <h3>Zbliżające się:</h3>
            <ul className="calendar-list">{ sortedArray.map(item => 
                <li key={item.id}>
                    <span>{item.date}</span> godz.: {item.time} => 
                    <a href={`mailto: ${item.email}`}>
                    {item.firstName} {item.lastName}</a>
                    <Button>X</Button>
                </li>)}
            </ul></section>
            <section> <h3>Zarchiwizowane:</h3>
            <ul className="calendar-list">{ meetings.map(item => 
                <li key={item.id}>
                    <span>{item.date}</span> godz.: {item.time} => 
                    <a href={`mailto: ${item.email}`}>
                    {item.firstName} {item.lastName}</a>
                    <button>X</button>
                </li>)}
            </ul></section>
        </StyledCalendarList>)
}

export default CalendarList;