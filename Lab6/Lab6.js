function q1() {
    
    var answer1 = document.getElementById("q1");
    var blueContainer = document.getElementById("main-content");

    var listCount = document.getElementsByClassName("nav-item");
    var linkCount = blueContainer.getElementsByTagName("a");
   
    answer1.innerHTML = "Number of Items in List in Yellow Pane: " +  listCount.length + "</br>";
    answer1.innerHTML += "Number of Links in Blue Container: " + linkCount.length;
    
}
q1();

function q2() {

    var answer2 = document.querySelector("[data='q2']");

    var elements = document.getElementById("main-content");

    var content = elements.textContent;

    answer2.innerHTML = content;
}
q2();

function q3() {

    var answer3 = document.querySelector("[style='border:3px dotted black;margin:15px']");

    var newParagraph = document.createElement('p');
    var newText = document.createTextNode('This is paragraph #10');

    newParagraph.appendChild(newText);

    answer3.appendChild(newParagraph);

}
q3 ();