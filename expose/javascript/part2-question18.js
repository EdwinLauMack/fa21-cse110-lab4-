function getTime(){

let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
};

function printEverySecond() {
    setInterval(getTime, 1000);
}

printEverySecond();

//to stop printing every second use control+c on the command line 