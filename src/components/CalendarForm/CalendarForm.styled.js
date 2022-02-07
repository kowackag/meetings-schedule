import styled from "styled-components";

const DefaultStyledCalendarForm = styled.form`


`

const StyledCalendarForm = styled(DefaultStyledCalendarForm)(props=>props.style)

export default StyledCalendarForm;