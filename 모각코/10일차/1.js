var name1=document.querySelector('.이름');
var num= document.querySelector('.번호');
var bt = document.querySelector('.bt');
var bd = document.querySelector('body');
var load=document.querySelector('h2');
let i=3;

bt.addEventListener('click',()=>{
    setInterval(timer,1000);
   setTimeout(call,4000);
})

function call(){
    name1.innerHTML = "박상현";
    num.innerHTML = "010-9876-1234";
}


function timer(){
    if(i==0){
        load.innerHTML='';
        clearInterval(timer);
    }
    else{
        load.innerHTML=i;
        i--;
    }
   
}

