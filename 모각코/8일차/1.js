var button=document.querySelector('.button');
button.addEventListener('click', ()=>start());

var index=-1;


function start(){
    let id = ["박", "박상", "박상현", "박상현짱","박상현짱!"];

    index = (index+1)%5;
    var h1 = document.getElementsByTagName('h1');

    var a=Math.round(Math.random()*255);
    var b=Math.round(Math.random()*255);
    var c=Math.round(Math.random()*255);

    h1[0].innerHTML = id[index];
    h1[0].style.color = "rgb(" + a + "," + b + "," + c + ")";
}