import styled, {css} from 'styled-components';

const DefaultStyledCalendarItem = styled.li`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    list-style: none;
  
        color: ${props=> props.underline && css`red`}


`
const StyledCalendarItem = styled(DefaultStyledCalendarItem)(props=> props.styled);


export default StyledCalendarItem;