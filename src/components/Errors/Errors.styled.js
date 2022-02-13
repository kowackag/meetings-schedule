import styled from 'styled-components';

const DefaultStyledErrors = styled.ul`
    padding: 6rem 0;
    width:40%;
    font-size: 1.4rem;
    font-style: italic;
    color: #eb0b0b;
    list-style: none;
`

const StyledErrors = styled(DefaultStyledErrors)(props=>props.style);

export default StyledErrors;