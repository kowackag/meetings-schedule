import styled, {css} from 'styled-components';

const DefaultStyledLabel = styled.label`
    display: block;
    margin-top: 1.6rem;
    margin-bottom: 0.4rem;
    font-size: 1.8rem;
    font-weight: 600;
    color:rgba(var(--color-font));
`
const StyledLabel = styled(DefaultStyledLabel)(props=>props.style);

export default StyledLabel;