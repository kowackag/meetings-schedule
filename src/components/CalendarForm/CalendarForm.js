import React from 'react';
import StyledCalendarForm from './CalendarForm.styled';
import Label from './../Label/Label';
import Input from './../Input/Input';
import Submit from '../Submit/Submit';
import {useState} from 'react';
import validateForm from '../validateForm';

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
        const fieldsData = Object.assign({}, state);
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

    const saveMeeting = () => {
        const {saveMeetings} = props;
        if(typeof saveMeetings === 'function') {
            saveMeetings( getFieldsData() );
        }
    }

    const clearFormFields = () => {
        const fieldsData = getFieldsData();
        for(const prop in fieldsData) {
            fieldsData[prop] = '';
        }

        setState(fieldsData);
    }

    const renderErrors = () => {
        if (state.errors) {
            return state.errors.map( (err, index) => <li key={ index }>{ err }</li>);
        }
        
    }
    
    const fields = [
        {name:'date', value:state.date, onChange: handleFieldChange, placeholder:'RRRR-MM-DD', desc: 'Data:' },
        {name:'time', value:state.time, onChange: handleFieldChange, placeholder:'HH:MM', desc: 'Godzina:' },
        {name:'firstName', value: state.firstName, onChange: handleFieldChange, placeholder:'RRRR-MM-DD', desc: 'Imię:' },
        {name:'lastName', value: state.lastName, onChange: handleFieldChange, placeholder:'RRRR-MM-DD', desc: 'Nazwisko:' },
        {name:'email', value: state.email, onChange: handleFieldChange, placeholder:'nazwa@poczty.pl', desc: 'Email:' }
    ]

    return (
        <StyledCalendarForm action="" onSubmit={ handleSubmit }>
            <ul>{ renderErrors()}</ul>
            {fields.map(({name, value, onChange, placeholder, desc}) => <div key ={name}>
                <Label>{desc} <Input 
                            className= "form__value"
                            name={name} 
                            onChange={onChange} 
                            value={ value} 
                            placeholder={placeholder}/>
                </Label>
            </div>)}
            <div><Submit type="submit" value="zapisz" /></div>
        </StyledCalendarForm>
        )

    
}

export default CalendarForm;