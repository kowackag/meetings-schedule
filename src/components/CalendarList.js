import React from 'react';
import {loadMeetingsAction, saveMeetingsAction} from './../actions/calendar';
import {connect} from 'react-redux';

class CalendarList extends React.Component {   
    render() {
        return <ul>{ this.renderMeetingsList() }</ul>
    }

    renderMeetingsList() {
        const {meetings} =  this.props;
        return meetings.map(item => 
            this.renderMeetingsItem(item)
        );
    }

    renderMeetingsItem(itemData) {
        return (
            <li key={itemData.id}>
                {itemData.date} {itemData.time} => 
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.firstName} {itemData.lastName}
                </a>
                <button>X</button>
            </li>
        )
    }
}

// const mapStateToProps = (state, props) => {
//     return {
//         meetings: state.meetings,
//     }
// }

// const mapActionToProps = {
//     onLoad: loadMeetingsAction,
//     onSave: saveMeetingsAction
// }

// export default connect(mapStateToProps, mapActionToProps)(CalendarList);


export default CalendarList