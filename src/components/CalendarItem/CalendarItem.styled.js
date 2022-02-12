import styled, {css} from 'styled-components';

const DefaultStyledCalendarItem = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: ${props=> props.underline ===1 && css `rgb(var(--color-contrast))`};
    font-weight: ${props=> props.underline===1 && css `bold`};

    & .link {
        color: inherit;
    }

    & button {
        color: rgba(var(--color-font), .5);
    }
`
const StyledCalendarItem = styled(DefaultStyledCalendarItem)(props=>props.style);


export default StyledCalendarItem;