const display=document.getElementById('clock');
const distY=document.getElementById('date-year');
const audio=new Audio('./calm_minecraft.mp3');
//
audio.loop=true;
let alarmTime=null;
let alarmTimeout=null;
//
function updateTime()
{
    const date=new Date(); //holds current date & time
    const hour=formatDT(date.getHours());
    const minutes=formatDT(date.getMinutes());
    const seconds=formatDT(date.getSeconds());
    const year=date.getFullYear();
    const day=formatDT(date.getDate());
    const month=formatDT(date.getMonth()+1);
    //update display
    display.innerText=`${hour}:${minutes}:${seconds}`
    distY.innerText=`${day}/${month}/${year}`
}
function formatDT(time)
{
    if(time<10)
    {
        return '0'+time;
    }
    return time;
}
function setAT(value)
{
    alarmTime=value;
}
function setAlarm()
{
    if(alarmTime)
    {
        const current=new Date();
        const timeTA=new Date(alarmTime);
        if(timeTA>current)
        {
            const timeout=timeTA.getTime()-current.getTime();
            alarmTimeout=setTimeout(()=>audio.play(),timeout);
            alert('Alarm Set');
        }
    }
}
function clearAlarm()
{
    audio.pause();
    if(alarmTimeout)
    {
        clearTimeout(alarmTimeout);
        alert("Alarm Cleared");
    }
}
//
setInterval(updateTime,1000);