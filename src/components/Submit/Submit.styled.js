import styled from 'styled-components';

const DefaultStyledSubmit = styled.input`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
   
    display: block;
    padding: 1rem 2rem;
    min-width: 120px;
    margin: 3rem auto 0;
    border: none;
    box-shadow: 6px 6px 10px rgb(var(--color-beta)), -4px -4px 6px rgb(var(--color-gamma));
    background-color: rgb(var(--color-alfa));
    color: var(--color-font);
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

const StyledSubmit = styled(DefaultStyledSubmit)(props=>props.style);

export default StyledSubmit;

