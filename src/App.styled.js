import styled from 'styled-components';

const DefaultStyledApp = styled.section`
    --color-font: ${props=>props.theme.colorFont};
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-contrast:${props=>props.theme.colorContrast};
    margin: 4rem auto;
    padding: 4rem;
    max-width: 1200px;
    box-shadow:8px 8px 20px #ccd1d8, 8px 8px 20px #ccd1d8;
    background-color: rgb(var(--color-alfa));
    color: rgb(var(--color-font));

    & .Calendar__title {
        margin-bottom: 3rem;
        width: 100%;
        text-align: center;
        color: rgb(var(--color-contrast));
    }

`
const StyledApp = styled(DefaultStyledApp)(props=>props.style);

export default StyledApp;