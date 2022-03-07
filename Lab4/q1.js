function time_remaining() {
    var monthRem = document.getElementById("months");
    var weeksRem = document.getElementById("weeks");
    var daysRem = document.getElementById("days");
    var hourRem = document.getElementById("hours");
    var minsRem = document.getElementById("minutes");
    var secsRem = document.getElementById("seconds");

    var today = new Date();
    var newyear = new Date('Dec 31, 2022 23:59:59');
    var remainder = newyear - today;

    monthRem.innerHTML = newyear.getMonth() - today.getMonth();
    weeksRem.innerHTML = Math.floor(remainder / (1000 * 60 * 60 * 24 * 7));
    daysRem.innerHTML = Math.floor(remainder / (1000 * 60 * 60 * 24));
    hourRem.innerHTML = Math.floor(remainder / (1000 * 60 * 60));
    minsRem.innerHTML = Math.floor(remainder / (1000 * 60));
    secsRem.innerHTML = Math.floor(remainder / 1000);
}
time_remaining();

