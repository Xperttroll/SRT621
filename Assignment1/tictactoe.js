function hidegame() {
    //hide game until button is clicked and names exist
    var ready = document.getElementById("ready");
    var feedback = document.getElementById("log");
    ready.style.display = "none";
    feedback.style.display = "none";
}

//declaring variables which may be used in many functions or loops
var player1 = document.getElementById("Player1").value;
var player2 = document.getElementById("Player2").value;

let movecount = 10;
const p1 = [9, 7, 5, 3, 1];
const p2 = [8, 6, 4, 2];

var cell1 = document.getElementById("11");
var cell2 = document.getElementById("12");
var cell3 = document.getElementById("13");
var cell4 = document.getElementById("21");
var cell5 = document.getElementById("22");
var cell6 = document.getElementById("23");
var cell7 = document.getElementById("31");
var cell8 = document.getElementById("32");
var cell9 = document.getElementById("33");

var cell = document.getElementsByTagName("td");

var play = document.getElementById("comments");
var timestamp = new Date();

const p1Moves = [];
const p2Moves = [];

var playerturn = document.getElementById("turn");

function turn() {
    //display who's turn it is
    if (p2.includes(movecount) || movecount == 10){
        playerturn.innerHTML = "Turn to play: " + player1;
        --movecount;
        return false;
    } else if (p1.includes(movecount)){
        playerturn.innerHTML = "Turn to play: " + player2;
        --movecount;
        return false;
    } else {
        playerturn.innerHTML = "Game Over";
        return false;
    };
}

function tictactoe() {
    //This function will display the game if both player names are entered
    //If name is missing an alert box appears asking for both names
    var ready = document.getElementById("ready");
    var feedback = document.getElementById("log");
    const player1 = document.getElementById("Player1").value.length;
    const player2 = document.getElementById("Player2").value.length;
    if (player1 == 0 || player2 == 0) {
        //ready.style.display = "block";
        //ready.innerHTML =("Please enter both Player's name!");
        alert("Please enter both Player's name!");
    } else{
        ready.style.display = "block";
        feedback.style.display = "block";
        turn();
        var removeButton = document.getElementById("start");
        removeButton.removeAttribute("onclick")
        return false;
    };
}

function winner() {
    const possibleWins = {
        1:[1,2,3],
        2:[4,5,6],
        3:[7,8,9],
        4:[1,4,7],
        5:[2,5,8],
        6:[3,6,9],
        7:[1,5,9],
        8:[3,5,7]};
    p1Moves.sort();
    p2Moves.sort();

    for (var key in possibleWins) {
        var value = possibleWins[key];
        const player1Turn = value.filter(x => p1Moves.indexOf(x) !== -1);
        const player2Turn = value.filter(x => p2Moves.indexOf(x) !== -1);
        console.log(player1Turn.length);
        if (player1Turn.length == 3){
            playerturn.innerHTML = "Game Over";
            play.innerHTML += "<br />" + player1 + " is the winner!";
            break;
        } else if (player2Turn.length == 3){
            playerturn.innerHTML = "Game Over";
            play.innerHTML += "<br />" + player2 + " is the winner!";
            break;
        } else if(movecount == 0 && player2Turn.length < 1){
            playerturn.innerHTML = "Game Over";
            play.innerHTML += "<br />Draw!";
            break;
        } 
    }

}

function move(id) {
    //for tile selected choose 'X' for player 1 or 'O' for player 2
    //remove the click function so ile can no longer be selected
    //remove hover css to indicate option no longer avilable
    //show next player's turn
    //display feedback of last move played
    switch(id){
        case "11":
            if (p1.includes(movecount)){
                cell1.innerHTML = "X";
                cell1.classList.remove("opt");
                cell1.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 1,1<br />";
                p1Moves.push(1);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell1.innerHTML = "O";
                cell1.classList.remove("opt");
                cell1.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 1,1<br />";
                p2Moves.push(1);
                winner();
                return false;
            };
            break;
        case "12":
            if (p1.includes(movecount)){
                cell2.innerHTML = "X";
                cell2.classList.remove("opt");
                cell2.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 1,2<br />";
                p1Moves.push(2);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell2.innerHTML = "O";
                cell2.classList.remove("opt");
                cell2.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 1,2<br />";
                p2Moves.push(2);
                winner();
                return false;
            };
            break;
        case "13":
            if (p1.includes(movecount)){
                cell3.innerHTML = "X";
                cell3.classList.remove("opt");
                cell3.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 1,3<br />";
                p1Moves.push(3);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell3.innerHTML = "O";
                cell3.classList.remove("opt");
                cell3.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 1,3<br />";
                p2Moves.push(3);
                winner();
                return false;
            };
            break;
        case "21":
            if (p1.includes(movecount)){
                cell4.innerHTML = "X";
                cell4.classList.remove("opt");
                cell4.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 2,1<br />";
                p1Moves.push(4);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell4.innerHTML = "O";
                cell4.classList.remove("opt");
                cell4.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 2,1<br />";
                p2Moves.push(4);
                winner();
                return false;
            };
            break;
        case "22":
            if (p1.includes(movecount)){
                cell5.innerHTML = "X";
                cell5.classList.remove("opt");
                cell5.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 2,2<br />";
                p1Moves.push(5);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell5.innerHTML = "O";
                cell5.classList.remove("opt");
                cell5.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 2,2<br />";
                p2Moves.push(5);
                winner();
                return false;
            };
            break;
        case "23":
            if (p1.includes(movecount)){
                cell6.innerHTML = "X";
                cell6.classList.remove("opt");
                cell6.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 2,3<br />";
                p1Moves.push(6);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell6.innerHTML = "O";
                cell6.classList.remove("opt");
                cell6.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 2,3<br />";
                p2Moves.push(6);
                winner();
                return false;
            };
            turn()
            break;
        case "31":
            if (p1.includes(movecount)){
                cell7.innerHTML = "X";
                cell7.classList.remove("opt");
                cell7.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 3,1<br />";
                p1Moves.push(7);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell7.innerHTML = "O";
                cell7.classList.remove("opt");
                cell7.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 3,1<br />";
                p2Moves.push(7);
                winner();
                return false;
            };
            break;
        case "32":
            if (p1.includes(movecount)){
                cell8.innerHTML = "X";
                cell8.classList.remove("opt");
                cell8.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 3,2<br />";
                p1Moves.push(8);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell8.innerHTML = "O";
                cell8.classList.remove("opt");
                cell8.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 3,2<br />";
                p2Moves.push(8);
                winner();
                return false;
            };
            break;
        case "33":
            if (p1.includes(movecount)){
                cell9.innerHTML = "X";
                cell9.classList.remove("opt");
                cell9.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player1 + " played X at 3,3<br />";
                p1Moves.push(9);
                winner();
                return false;
            } else if (p2.includes(movecount)){
                cell9.innerHTML = "O";
                cell9.classList.remove("opt");
                cell9.removeAttribute("onclick");
                turn();
                play.innerHTML += "<br /> at " + timestamp + " " + player2 + " played O at 3,3<br />";
                p2Moves.push(9);
                winner();
                return false;
            };
            break;
    }

}