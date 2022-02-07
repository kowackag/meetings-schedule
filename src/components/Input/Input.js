import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {className, type, value, name, onChange, title} = props;
    
    return( 
        <StyledInput>
            <input className={className} type={type} name={name} title={title} value={value || ''} onChange={onChange}/>
        </StyledInput>
    )
}

export default Input;