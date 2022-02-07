import React from 'react';
import StyledLabel from './Label.styled';

const Label = (props) => {
    return( 
        <StyledLabel>
          {props.children}
        </StyledLabel>
    )
}

export default Label;