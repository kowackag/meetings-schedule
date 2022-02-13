import React from 'react';
import StyledErrors from './Errors.styled';

const Errors = ({errors}) => {
    return (     
        <StyledErrors>
            {errors.map((err, index) => <li key={ index }>{ err }</li>)}
        </StyledErrors>
    )
}

export default Errors;