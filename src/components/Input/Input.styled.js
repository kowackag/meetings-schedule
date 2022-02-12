import styled from 'styled-components';

const DefaultStyledInput = styled.div`
    display: flex;
    box-shadow: inset 4px 4px 6px rgb(var(--color-beta)), inset -4px -4px 6px rgb(var(--color-gamma));
    background-color: rgb(var(--color-alfa));
    font-size: 1.2rem;
    color:rgb(var(--color-font));

    .form__value {
        display:inline-block;
        padding: 1rem 1rem;
        width: 90%;
        flex-grow: 2;
        outline: none;
        border: none;
        background-color: transparent;
        color: rgba(var(--color-font),.8);
        font-size: 1.4rem;
    }
    
    & .form__value:focus {
        background-color: rgb(var(--color-gamma));
        box-shadow: inset 3px 3px 3px rgb(var(--color-beta)), inset -3px -3px 3px rgb(var(--color-gamma));
    }
  
    input:-webkit-autofill {
        box-shadow: inset 4px 4px 6px rgb(var(--color-beta)), inset -10px -10px 36px rgb(var(--color-gamma));
        -webkit-text-fill-color: rgb(var(--color-font)) !important;
    }
`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;