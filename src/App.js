import React from 'react';
import { connect } from 'react-redux';

import Calendar from './components/Calendar';

class App extends React.Component {
    render() {
        return <Calendar />
    }
}

const mapStateToProps = (state, props) => {
    return {
        meetings: state.meetings,
    }
}

const mapActionToProps = {
    onLoad: loadMeetingsAction,
    onSubmit: saveMeetingsAction
}

export default connect(mapStateToProps, mapActionToProps)(App);