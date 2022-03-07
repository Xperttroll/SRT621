function static_clock() {
    
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var static = document.getElementById("q4");

    var hours = new Image(50, 50);
    var mins = new Image(50, 50);
    var secs = new Image(50, 50);
    hours.src = "images/feelsweird.png";
    mins.src = "images/modcheck.gif";
    secs.src = "images/copium.png";

    hour = (hour % 12) || 12;

    time = "The time is <br>";
    static.innerHTML = time;
    i = 0;
    x = 0;
    y = 0;

    while (i < hour){
        // clone node learnt from Mozilla MDN Web Docs
        static.append(hours.cloneNode(true));
        i++;
    }

    static.innerHTML += "<br/>";
   
    while (x < min){
        static.appendChild(mins.cloneNode(true));
        x++;
    }

    static.innerHTML += "<br/>";
    
    while (y < sec){
        static.appendChild(secs.cloneNode(true));
        y++;
    }
}
static_clock();