function roll_dices() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");

    var dices = new Array(dice1, dice2);

    for (let i=0; i <= dices.length; i++){
        var roll = (Math.floor(Math.random() * 6) + 1);
        if (roll == 1) {
            dices[i].className += "dice1";
        } else if (roll == 2) {
            dices[i].className += "dice2";
        } else if (roll == 3) {
            dices[i].className += "dice3";
        } else if (roll == 4) {
            dices[i].className += "dice4";
        } else if (roll == 5) {
            dices[i].className += "dice5";
        } else {
            dices[i].className += "dice6";
        }
    }
}
roll_dices()