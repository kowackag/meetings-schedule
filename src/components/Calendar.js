import React from 'react';
import {connect} from 'react-redux';
import {loadMeetingsAction, saveMeetingsAction} from './../actions/calendar'
import CalendarList from './../components/CalendarList/CalendarList'
import CalendarForm from './../components/CalendarForm/CalendarForm';
import CalendarApi from './../providers/CalendarAPI';

const meetings =  new CalendarApi();

class Calendar extends React.Component {
    
    sendMeetingToApi = (meetingData) => {
        meetings.sendMeetingToApi(meetingData)
            .then(resp=>this.addMeetingToState(resp))
            .catch(err => {
                console.error(err);
            });
    }

    addMeetingToState(meetingData) {
        this.props.onSave(meetingData);
    }

    componentDidMount() {
        meetings.loadMeetingsFromApi()
            .then(resp => {
                this.props.onLoad(resp);
            })
            .catch(err => {
                console.error(err);
            });
    }
    
    render() {
        return (
            <section>
                <CalendarList meetings={this.props.meetings}/>
                <CalendarForm saveMeetings={this.sendMeetingToApi}/>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        meetings: state.meetings,
    }
}

const mapActionToProps = {
    onSave: saveMeetingsAction,
    onLoad: loadMeetingsAction,
}

export default connect(mapStateToProps, mapActionToProps)(Calendar);