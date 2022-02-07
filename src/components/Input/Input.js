import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {className, value, name, onChange, placeholder} = props;
    
    return( 
        <StyledInput>
            <input className={className} name={name} placeholder={placeholder} value={value || ''} onChange={onChange}/>
        </StyledInput>
    )
}

export default Input;