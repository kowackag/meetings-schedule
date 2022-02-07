import React from 'react';
import { connect } from 'react-redux';

import Calendar from './components/Calendar';

class App extends React.Component {
    render() {
        return <Calendar />
    }
}

export default App;