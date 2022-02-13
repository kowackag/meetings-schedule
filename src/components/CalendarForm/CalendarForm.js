import React from 'react';
import StyledCalendarForm from './CalendarForm.styled';
import Label from './../Label/Label';
import Input from './../Input/Input';
import Submit from '../Submit/Submit';
import {useState} from 'react';
import validateForm from '../validateForm';
import { useSelector, useDispatch } from 'react-redux';
import {setEditableAction} from './../../actions/calendar';
import Errors from './../Errors/Errors';

const CalendarForm = (props) => {
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        errors: [],
    }

    const [state, setState] = useState(initState);
    const [isEditing, setIsEditing] = useState(false);
    const editable = useSelector(props=>props.editable);
    const meetings = useSelector(props=>props.meetings);

    const editingMeetings = meetings.find(item=>item.id === editable);
    const dispatch = useDispatch();
    const setEditionFormFields = () => {
        setIsEditing(true);
        setState(editingMeetings);
        dispatch(setEditableAction(0));
    }

    if (editable !==0) setEditionFormFields();

    const saveMeeting = () => {
        const {saveMeetings, updateMeeting} = props;
        if(typeof saveMeetings === 'function') {
            if (isEditing) {
                setIsEditing(false); 
                updateMeeting(state.id, getFieldsData());   
            } else {
                saveMeetings(getFieldsData()); 
            }  
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errors = validateForm(state);
        setState({...state,
            errors
        });

        if(errors.length === 0) {
            saveMeeting();
            clearFormFields();
        }
    }

    const getFieldsData = () => {
        const fieldsData = {...state};
        delete fieldsData['errors'];
        return fieldsData;
    }

    const isFieldNameCorrect = (name) => {
        const fieldsData = getFieldsData();
        return typeof fieldsData[name] !== 'undefined';
    }


    const handleFieldChange = e => {
        e.preventDefault();
        if(isFieldNameCorrect(e.target.name)) {
            setState({...state,
                [e.target.name]: e.target.value,
            });
        }
    }

    const clearFormFields = () => {
        const fieldsData = getFieldsData();
        for(const prop in fieldsData) {
            fieldsData[prop] = '';
        }
        setState(fieldsData);
    }
    
    const fields = [
        {name:'date', value:state.date, onChange: handleFieldChange, placeholder:'RRRR-MM-DD', desc: 'Data:' },
        {name:'time', value:state.time, onChange: handleFieldChange, placeholder:'HH:MM', desc: 'Godzina:' },
        {name:'firstName', value: state.firstName, onChange: handleFieldChange, desc: 'Imię:' },
        {name:'lastName', value: state.lastName, onChange: handleFieldChange, desc: 'Nazwisko:' },
        {name:'email', value: state.email, onChange: handleFieldChange, placeholder:'nazwa@poczty.pl', desc: 'Email:' }
    ]

    return (
        <StyledCalendarForm onSubmit={ handleSubmit } isEditing={isEditing}>
            <div className="form">
                {fields.map(({name, value, onChange, placeholder, desc}) => <div key ={name}>
                    <Label>{desc} <Input 
                                className= "form__value"
                                name={name} 
                                onChange={onChange} 
                                value={ value} 
                                placeholder={placeholder}/>
                    </Label>
                </div>)}
                <div><Submit type="submit" value="Zapisz" /></div>
            </div>
            {state.errors && <Errors errors ={state.errors}></Errors> }
        </StyledCalendarForm>
        )  
}

export default CalendarForm;