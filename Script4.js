function labels(tagName,atrb,atrbv,inn){
    var lab=document.createElement(tagName);
    lab.setAttribute(atrb,atrbv);
    lab.innerHTML=inn;
    return lab;
}
function inputs(tagName,atrb,atrbv,atrb1,atrb1v){
    var inp=document.createElement(tagName);
    inp.setAttribute(atrb,atrbv);
    inp.setAttribute(atrb1,atrb1v);
    return inp;
}   
function linebreak(tagName){
    var br=document.createElement(tagName);
    return br;
}
function buttons(tagName){
    var btns=document.createElement(tagName);
    btns.innerHTML="Submit";
    return btns;
}
var br1=linebreak("br");
var br2=linebreak("br");
var br3=linebreak("br");
var br4=linebreak("br"); 
var br5=linebreak("br");
var br6=linebreak("br");
var br7=linebreak("br");
var br8=linebreak("br");
var br9=linebreak("br");
var br10=linebreak("br");
var br11=linebreak("br");
var lab1=labels("label","for","firstName","First Name");
var lab2=labels("label","for","middleName","Middle Name");
var lab3=labels("label","for","lastName","Last Name");
var lab4=labels("label","for","email","E-mail");
var lab5=labels("label","for","Password","Password");
var firstName=inputs("input","type","text","id","firstName");
var middleName=inputs("input","type","text","id","middleName");
var lastName=inputs("input","type","text","id","lastName");
var email=inputs("input","type","text","id","email");
var pass=inputs("input","type","password","id","Password");
var buttns=buttons("button");
document.body.append(lab1,br1,firstName,br2,lab2,br3,middleName,br4,lab3,br5,lastName,br6,lab4,br7,email,br8,lab5,br9,pass,br10,br11,buttns)