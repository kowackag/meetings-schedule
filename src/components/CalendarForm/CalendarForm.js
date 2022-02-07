import React from 'react';
import StyledCalendarForm from './CalendarForm.styled';
import Label from './../Label/Label';
import {useState} from 'react';

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

        const errors = validateForm();
        this.setState({
            errors,
        });

        if(errors.length === 0) {
            this.saveMeeting();
            this.clearFormFields();
        }
    }

    const validateForm = () => {
        const errors = [];

        if(!isDateCorrect()) {
            errors.push('Popraw wprowadzoną datę');
        }

        if(!isTimeCorrect()) {
            errors.push('Popraw wprowadzoną godiznę')
        }

        if(!isFirstNameCorrect()) {
            errors.push('Wprowadź imię');
        }

        if(!isLastNameCorrect()) {
            errors.push('Wprowadż nazwisko')
        }

        if(!isEmailCorrect()) {
            errors.push('Wprowadź poprawny adres email');
        }


        return errors;
    }

    const isDateCorrect = () =>{
        const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

        return pattern.test(state.date);
    }

    const isTimeCorrect = () => {
        const pattern = /^[0-9]{2}:[0-9]{2}$/
        
        return pattern.test(this.state.time);
    }

    const isFirstNameCorrect = () => {
        return state.firstName.length > 0;
    }

    const isLastNameCorrect = () => {
        return state.lastName.length > 0;
    }

    const isEmailCorrect = () => {
        const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

        return pattern.test(this.state.email);
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
        if(isFieldNameCorrect(e.target.name)) {
            this.setState({
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
        return state.errors.map( (err, index) => <li key={ index }>{ err }</li>);
    }

    return (
        <StyledCalendarForm action="" onSubmit={ handleSubmit }>
            <ul>{ renderErrors() }</ul>
            <div>
                <Label>
                        Data: <input 
                            name="date" 
                            onChange={ handleFieldChange } 
                            value={ state.date } 
                            placeholder="RRRR-MM-DD"
                        />
                    </Label>
                </div>
                <div>
                    <label>
                        Godzina: <input 
                            name="time" 
                            onChange={ handleFieldChange } 
                            value={ state.time } 
                            placeholder="HH:MM"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Imię: <input 
                            name="firstName" 
                            onChange={ handleFieldChange } 
                            value={ state.firstName } 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Nazwisko: <input 
                            name="lastName" 
                            onChange={ handleFieldChange } 
                            value={ state.lastName } 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email: <input 
                            name="email" 
                            onChange={ handleFieldChange } 
                            value={ state.email } 
                            placeholder="nazwa@poczty.pl"
                        />
                    </label>
                </div>
                <div><input type="submit" value="zapisz" /></div>
            </StyledCalendarForm>
        )

    
}

export default CalendarForm;