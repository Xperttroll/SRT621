function static_clock() {
    
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var static = document.getElementById("q3");

    var hours = new Image(50, 50);
    var mins = new Image(50, 50);
    var secs = new Image(50, 50);
    hours.src = "images/feelsweird.png";
    mins.src = "images/modcheck.gif";
    secs.src = "images/copium.png";

    hour = (hour % 12) || 12;

    time = "The time is <br>";
    static.innerHTML = time;

    for (i=0; i < hour; i++){
        // clone node learnt from Mozilla MDN Web Docs
        static.appendChild(hours.cloneNode(true));
    }

    static.innerHTML += "<br/>";
   
    for (i=0; i < min; i++){
        static.appendChild(mins.cloneNode(true));
    }

    static.innerHTML += "<br/>";
    
    for (i=0; i < sec; i++){
        static.appendChild(secs.cloneNode(true));
    }
}
static_clock();