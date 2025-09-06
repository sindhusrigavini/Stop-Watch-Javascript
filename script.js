document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/stopwatch-hand_488220-63194.jpg')";
document.body.style.backgroundSize="cover"
document.body.style.backgroundImage="no-repeat"

let clock_timer_ele = document.getElementById("clock_timer");
let count = 0;
let a; 
function startTimer(userLimit) {
    count = 0;
    clock_timer_ele.textContent = count;
    clearInterval(a); 
    a = setInterval(() => {
        clock_timer_ele.textContent = count;
        count += 1;
        if (count === userLimit) {
            clearInterval(a);
        }
    }, 500);
}
function stopTimer() {
    clearInterval(a);
}