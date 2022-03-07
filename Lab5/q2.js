function week() {
    
    var today = new Date();
    var day = today.getDay();
    var msg;
    var weekday = document.getElementById("q2");

    switch (day) {
        case 0:
            msg = "Sunday";
            break;
        case 1:
            msg = "Monday";
            break;
        case 2:
            msg = "Tuesday";
            break;
        case 3:
            msg = "Wednesday";
            break;
        case 4:
            msg = "Thursday";
            break;
        case 5:
            msg = "Friday";
            break;
        case 6:
            msg = "Saturday";
            break;
    }
    
    weekday.innerHTML = "Today is " + msg + "!";

}
week();