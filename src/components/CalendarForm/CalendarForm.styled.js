import styled from "styled-components";

const DefaultStyledCalendarForm = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    & .form {
        padding: 2rem;
        width:50%;
    }

    & .errors {
        padding: 4rem 0;
        width:40%;
        font-style: italic;
        color: #eb0b0b;
        & li {
            list-style: none;
        }
    }
`

const StyledCalendarForm = styled(DefaultStyledCalendarForm)(props=>props.style)

export default StyledCalendarForm;