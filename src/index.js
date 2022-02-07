import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './App';
import meetingReducer from './reducers';
import {ThemeProvider} from 'styled-components';
import themeSettings from './../src/styles/theme';
import ResetStyle from './styles/Reset';
import GlobalStyle from './styles/Global';


const store = createStore(meetingReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={themeSettings}>
            <ResetStyle/>
            <GlobalStyle/>
            <App />
        </ThemeProvider>
    </Provider>,
    document.querySelector('#root')
);