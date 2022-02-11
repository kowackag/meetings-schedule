const CalendarAPI  = () => {

    const apiUrl = 'http://localhost:3005/meetings';

    const loadMeetingsFromApi = () => {
      return fetch(apiUrl)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            throw new Error('Network error!');
        })  
    }

    const sendMeetingToApi = (meetingData) => {
       return fetch(apiUrl, {
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
    }
    return [loadMeetingsFromApi, sendMeetingToApi];
}

export default CalendarAPI;
