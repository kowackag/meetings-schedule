import styled from 'styled-components';

const DefaultStyledCalendarItem = styled.ul`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    list-style: none;

`
const StyledCalendarItem = styled(DefaultStyledCalendarItem)(props=> props.styled);


export default StyledCalendarItem;