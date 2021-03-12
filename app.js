//Initialize variables
let seconds = 0, minutes = 0, hours = 0, ms=0;
let displaySeconds, displayMinutes, displayHours, displayMs;
let interval =null;

let on = false; 



//Call on start button
function start(){  
    if(!on){
        on = true;
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

        
}

//duh
function stop(){
    clearInterval(interval);
    on = false;
    let textArray = [
        "OOOOH! you are Naughty xx",
        "MY MY! What do we have here? xx",
        "I do declare, it's getting rather hot in here. xx",
        "What do i have to do, to get your number? xx",
        "Can you help me practice my chat-up lines? xx",
        "RESISTANCE IS FUTILE, get your coat xx",
        "WOW! so fast, how can i keep up? xx",
        "NOW! that is what i'm talking about mmmm mmmm xx",
        "YUMMY! xx",
    ];
    document.querySelector(".message").innerHTML = textArray[Math.round(Math.random()*(textArray.length-1))];
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
    document.querySelector('#time').innerHTML = `00:00:00:00`;
    document.querySelector(".message").innerHTML = "";
    clearInterval(interval);
    //
    ms = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
}

