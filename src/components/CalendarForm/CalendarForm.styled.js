import styled, {css} from "styled-components";

const DefaultStyledCalendarForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top:1rem;
    padding: 1rem;
    box-shadow: ${props=> props.isEditing && css`4px 4px 6px rgba(var(--color-contrast),.5), -4px -4px 6px rgba(var(--color-contrast),.5);`};
   
    & .form {
        padding: 2rem;
        width:50%;
    }
`

const StyledCalendarForm = styled(DefaultStyledCalendarForm)(props=>props.style)

export default StyledCalendarForm;