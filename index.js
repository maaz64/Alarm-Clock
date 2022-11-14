var alarmSound = new Audio();
alarmSound.src = 'alarm_audio.mp3'

var alarmTime;
var alarmTimer;

function setAlarm(button) {
    var ms = document.getElementById('alarmTime').valueAsNumber;
    if (isNaN(ms)) {
        alert('Invalid Date')
        return;
    }
    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
    var differnceInMs = alarmTime.getTime() - (new Date()).getTime();
    if(differnceInMs < 0)
    {
        alert('Specified time is already passed');
        return;
    }
    alarmTimer = setTimeout(initAlarm, differnceInMs);
    console.log('Alarm is set for',alarmTime);
    button.innerText = 'Cancel Alarm';
    button.setAttribute('onclick', 'cancelAlarm(this);');
}

function cancelAlarm(button)
{
    clearTimeout(alarmTimer);
    button.innerText = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);')
    
    
};

function initAlarm(){
    alarmSound.play();
};

function stopAlarm()
{
    alarmSound.pause();
    alarmSound.currentTime = 0;
    cancelAlarm(document.getElementById('alarmButton'));  
};

function snooze()
{
    stopAlarm();
    alarmTimer = setTimeout(initAlarm, 300000);  // 5*60*1000 = 5 minutes
};

setInterval(()=>{
    d = new Date();  //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    hr_rotation = 30*hr + min/2;  //converting current time
    min_rotation = 6*min;
    sec_rotation = 6*sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
},1000);