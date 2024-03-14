// config
const time = document.querySelector(".time")
const start = document.querySelector(".start_btn")
const point_after_start = document.querySelector(".point_after_start")
const stop_after_start = document.querySelector(".stop_after_start")
const reset_after_stop = document.querySelector(".reset_after_stop")
const continue_after_stop = document.querySelector(".continue_after_stop")
const stop_result = document.querySelector(".stop_result")
let seconds = 0;

// logical

// buttons
function hid() {
   start.classList.add("hidden");
   point_after_start.classList.remove("hidden")
   stop_after_start.classList.remove("hidden")
}

function stop_time_hid() {
   stop_after_start.classList.add("hidden")
   point_after_start.classList.add("hidden")
   reset_after_stop.classList.remove("hidden")
   continue_after_stop.classList.remove("hidden")

}

function return_start() {
   start.classList.remove("hidden");
   reset_after_stop.classList.add("hidden")
   continue_after_stop.classList.add("hidden")
}

function cont_start() {
   continue_after_stop.classList.add("hidden")
   reset_after_stop.classList.add("hidden")
   point_after_start.classList.remove("hidden")
   stop_after_start.classList.remove("hidden")
}
// time

function start_interval() {
   timerInterval = setInterval(addTimer, 1000);
}

function stop_interval() {
   clearInterval(timerInterval);
}

function addTimer() {
   seconds++;

   const minutes = Math.floor(seconds / 60);
   const second = seconds % 60;
   const MM = minutes > 9 ? minutes : '0' + minutes;
   const SS = second > 9 ? second : '0' + second;

   time.innerHTML = MM + ':' + SS;
}

function start_time() {
   start_interval()
   hid()

}

function stop_time() {
   stop_time_hid()
   stop_interval()
}

function cont_start_hidden() {
   cont_start()
   start_interval()
}

function reser_func(){
   return_start()
   time.innerHTML = "00:00"
   stop_result.textContent = ''
   seconds = 0
}

function freezing(){
   stop_result.innerHTML += `<p><h2>${time.innerHTML
   }</h2></p>`
}




start.onclick = start_time
stop_after_start.onclick = stop_time
reset_after_stop.onclick = reser_func;
continue_after_stop.onclick = cont_start_hidden
point_after_start.onclick = freezing
// reset_after_stop.onclick = reser_func

// function addTime() {

//    if (sec >= 9) {
//       sec = 0
//       sec_2++
//    } else {
//       sec += 1
//    }

//    if (sec_2 === 6 && sec === 0) {
//       sec = 0
//       sec_2 = 0
//       if (min >= 9) {
//          min = 0
//          min_2++
//       } else {
//          min += 1

//       }
//    }


//    time.innerHTML = min_2.toString() + min + ":" + sec_2 + sec

// }

// for (let i = 0; i < 140; i++) {
//    addTimer()

// }

// events

// continue_after_stop.innerHTML = `<div>
// <p>6</p></div>`

// const i = ['a', 'b', 'c']

// const word = i.split(' ')
// console.log(word)


// const w = 'ASd'.toLowerCase();
// Math.random


// 'asd'

// split slice splice 
let p = ['a1', 'a2', 'a3'];
let p2 = p.push('a4', 'a5');

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split('');

// array 
