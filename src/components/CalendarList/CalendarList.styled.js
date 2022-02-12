import styled from "styled-components";

const DefaultStyledCalendarList = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    & .calendar-planned, .calendar-past {
        padding:2rem;
        width:46%;
        box-shadow: 6px 6px 10px rgb(var(--color-beta)), -4px -4px 6px rgb(var(--color-beta));
    }

    & .calendar-past {
       font-style: italic;
       & li {
           color: rgba(var(--color-font), .6);
       }
    }

    & .calendar-subtitle {
        margin-bottom:2rem;
    }

`

const StyledCalendarList = styled(DefaultStyledCalendarList)(props=>props.style)

export default StyledCalendarList;