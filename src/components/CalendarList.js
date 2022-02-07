import React from 'react';

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

export default CalendarList