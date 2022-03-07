var today = new Date();

function profile(fname, lname, birth, sex, children, childName, kidBirth, kidSex) {
    this.givenName = fname;
    this.surname = lname;
    this.dob = birth;
    this.gender = sex;
    this.kids = children;
    this.kidName = childName;
    this.kidDOB = kidBirth;
    this.kidGender = kidSex;
    this.age = function() {
        return today.getFullYear() - (new Date(birth).getFullYear());
    };
    this.childage = function() {
        return today.getFullYear() - (new Date(kidBirth).getFullYear());
    };
};

profile.hasPet = false;

var propName = new Array('Given Name: ', 'Surname: ', 'Age: ', 'Gender: ', 'Number of Children: ', 'Child Name: ', 'Child Age: ', 'Child Gender: ', 'Has Pets: ');

var info = new profile('Sasuke', 'Uchiha', 'Jul 23, 1980 15:59:05', 'Male', '1', 'Sarada', 'Mar 31, 2008 02:45:31','Female', 0);

var details = "<span class=prop>" + propName[0] + "</span>" + info.givenName + 
"<br>" + "<span class=prop>" + propName[1] + "</span>" +  info.surname + 
"<br>" + "<span class=prop>" + propName[2] + "</span>" + info.age() +
"<br>" + "<span class=prop>" + propName[3] + "</span>" + info.gender +
"<br>" + "<span class=prop>" + propName[4] + "</span>" + info.kids +
"<br>" + "<span class=prop>" + propName[5] + "</span>" + info.kidName +
"<br>" + "<span class=prop>" + propName[6] + "</span>" + info.childage() +
"<br>" + "<span class=prop>" + propName[7] + "</span>" + info.kidGender +
"<br>" + "<span class=prop>" + propName[8] + "</span>" + profile.hasPet;

var el = document.getElementById('q3');
el.innerHTML = details;

var propclass = document.getElementsByClassName("prop");
for(let i=0; i <= propclass.length; i++) {
    propclass[i].style.color = "red";
}