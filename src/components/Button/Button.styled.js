import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border: 1px solid rgba(var(--color-beta), 0.5);
    background-color: rgb(var(--color-alfa));
    font-weight: 600;
    text-align: center;

    &:hover, &:focus {
        outline: none;
        background-color: rgba(var(--color-font), .65);
        color: rgb(var(--color-alfa));
        box-shadow: 2px 2px 4px rgba(var(--color-font),.4),-4px -4px 8px rgb(var(--color-gamma));
        cursor: pointer;
    }
`

const StyledButton = styled(DefaultStyledButton)(props=>props.style);

export default StyledButton;

