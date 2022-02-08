import styled from "styled-components";

const DefaultStyledCalendarList = styled.form`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
   
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    & .calendar-planned {
        padding:2rem;
        width:46%;
        box-shadow: 6px 6px 10px rgb(var(--color-beta)), -4px -4px 6px rgb(var(--color-beta));
    }
    & .calendar-list {
        list-style: none;
    }
`

const StyledCalendarList = styled(DefaultStyledCalendarList)(props=>props.style)

export default StyledCalendarList;