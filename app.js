

//Initialize variables
let seconds = 0, minutes = 0, hours = 0, ms=0;
let displaySeconds, displayMinutes, displayHours, displayMs;
let interval =null;


//Call on start button
function start(){

    //track setInterval in variable for clearInterval to work
    interval = setInterval(function(){
        //logic to update time
        ms++;
        if(ms === 100){
            ms =0;
            seconds++;
        
        if(seconds === 60){
            seconds = 0;
            minutes ++
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }
        //Format time before displaying
        formatTime();
        document.querySelector('#time').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMs}`;
    },10);
        
}

//duh
function stop(){
    clearInterval(interval);
}

function formatTime(){
    displayMs = ms.toString();
    displaySeconds = seconds.toString();
    displayMinutes = minutes.toString();
    displayHours = hours.toString();

    if(ms < 10){
        displayMs = '0' + ms.toString();
    }
    if(seconds < 10){
        displaySeconds= '0' + seconds.toString();
    }
    if(minutes < 10){
        displayMinutes= '0' + minutes.toString();
    }
    if(hours < 10){
        displayHours= '0' + hours.toString();
    }

}

function reset(){
    document.querySelector('#time').innerHTML = `00:00:00`;
    clearInterval(interval);
}