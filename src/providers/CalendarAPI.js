const apiUrl = 'http://localhost:3005/meetings';

export const loadMeetingsFromApi = () => {
    return fetch(apiUrl)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            throw new Error('Network error!');
        })  
}

export const sendMeetingToApi = (meetingData) => {
    return fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(meetingData),
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(resp => {
            if(resp.ok) {
                return resp.json()
            }
            throw new Error('Network error!');
        })
}
 
export const removeMeetingFromApi = (id) => {
    return fetch(apiUrl+`/${id}`, {
        method: 'DELETE',
        }).then(resp => {
            if(resp.ok) {
                return resp.json()
            }
            throw new Error('Network error!');
        })
}
 
export const updateMeetingInApi = (id, data) => {
    return fetch(apiUrl+`/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'}
        }).then(resp => {
            if(resp.ok) {
                return resp.json()
            }      
            throw new Error('Network error!');
        })
}