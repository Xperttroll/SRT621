function greeting() {
    
    var today = new Date();
    var time = today.getHours();
    var mins = today.getMinutes();
    var greet = document.getElementById("q1");

    if (time < 12) {
        greet.innerHTML = "Good Morning!"
    } else if (time == 12 && mins == 0) {
        greet.innerHTML = "Good Morning!"
    } else if (time < 18) {
        greet.innerHTML = "Good Afternoon!"
    } else if (time == 18 && mins == 0){
        greet.innerHTML = "Good Afternoon!"
    } else {
        greet.innerHTML = "Good Evening!"
    }
}
greeting();

