import React from 'react';
import {connect} from 'react-redux';
import {loadMeetingsAction, saveMeetingsAction} from './../actions/calendar'
import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';

class Calendar extends React.Component {
    apiUrl = 'http://localhost:3005/meetings';

    
    loadMeetingsFromApi() {
        fetch(this.apiUrl)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
                
                throw new Error('Network error!');
            })
            .then(resp => {console.log(resp);
                this.props.onLoad(resp);
            })
            .catch(err => {
                console.error(err);
            });
    }

    sendMeetingToApi = (meetingData) => {
        fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(meetingData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
                
                throw new Error('Network error!');
            })
            .then(meetingData => {
                this.addMeetingToState(meetingData);
            })
            .catch(err => {
                console.log(err);
            });
    }

    addMeetingToState(meetingData) {
        this.props.onSave();
    }

    componentDidMount() {
        this.loadMeetingsFromApi();
    }


    render() {

        return (
            <section>
                <CalendarList meetings={this.props.meetings}/>
                <CalendarForm/>
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
    onLoad: loadMeetingsAction,
    onSave: saveMeetingsAction
}

export default connect(mapStateToProps, mapActionToProps)(Calendar);

