import React from 'react';
import StyledSubmit from './Submit.styled';

const Submit = (props) => {
    return( 
        <StyledSubmit readOnly type ={props.type} value = {props.value}/>
    )
}

export default Submit;