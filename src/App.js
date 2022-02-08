import React from 'react';
import StyledApp from './App.styled';
import Calendar from './components/Calendar';

const App = () => {
    return (
        <StyledApp>
            <h1 className ="Calendar__title">Harmonogram spotkań</h1>
            <Calendar />
        </StyledApp>
    )
}

export default App;