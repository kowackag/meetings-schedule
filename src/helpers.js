const now = new Date;

export const getPastMeetings = (meetings) => {
    const copyArr = meetings.filter(item=> Date.parse(item.date + " " +item.time)<now.getTime());
    return copyArr.sort((a,b)=> {return Date.parse(b.date+" " +b.time) - Date.parse(a.date+" "+a.time)});
}

export const getPlannedMeetings = (meetings) => { 
    const copyArr = meetings.filter(item=> Date.parse(item.date + " " +item.time) >= now.getTime());
    return copyArr.sort((a,b) => {return Date.parse(a.date+" "+a.time) - Date.parse(b.date+" " +b.time)})
}

export const isOngoing = (date,time) => {
    const now = new Date().getTime();
    return Date.parse(date+ " " + time)-now < 86400000 && Date.parse(date+ " " + time) > now ? 1 : null
}