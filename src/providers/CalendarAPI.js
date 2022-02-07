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
            }
    }
}

export default Calendar;
