import React from 'react';
import StyledButton from './Button.styled';

const Button = (props) => {
    return( 
        <StyledButton data-index = {props.index} value = {props.value} onClick={props.onClick}>{props.children}</StyledButton>
    )
}

export default Button;