var name1= document.querySelector('.b1');
var age1= document.querySelector('.b2');
var inf1= document.querySelector('.b3');
var h1 = document.getElementsByTagName('h1');

name1.addEventListener('click', ()=>n());
age1.addEventListener('click', ()=>a());
inf1.addEventListener('click', ()=>i());

var name2={
    last_name: "박",
    fist_name:"상현"
}

var age2={
    age: "25",
    birth:"9811",
}

var inf2={
    job: "univ student",
    major:"software",
}

var b="<br>"

function n(){
    h1[0].innerHTML = "last_name= "+name2.last_name+b+"first_name= "+name2.fist_name;

}

function a(){
    h1[0].innerHTML = "age= "+age2.age+b+"birh= "+age2.birth;

}

function i(){
    h1[0].innerHTML = "job= "+inf2.job+b+"major= "+inf2.major;

}