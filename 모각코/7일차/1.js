'use strict';

var show=document.querySelector('#Time');
const go=document.querySelector('#go');
const stop2=document.querySelector('#stop');
const reset=document.querySelector('#reset');
const menu=document.querySelector('.menu');
const list=document.querySelector('.list');

go.addEventListener('click', ()=>start());
stop2.addEventListener('click', ()=>stopTime());
reset.addEventListener('click', ()=>resetTime());

let num1 = 0;
let num2 = 0;
let num3 = 0;
var time;
var cnt=0;

    function showTime(){
        num3++;
        if(num3>59){
            num3=0;
            num2++;
            if(num2>59){
                num1++;
                num2=0;
            }
        }
            show.innerHTML=(num1<10?'0'+num1:num1)+":"+(num2<10?'0'+num2:num2)+":"+(num3<10?'0'+num3:num3);
    }

     function start(){
         if(cnt==0){
            time=setInterval(showTime, 1000);
            cnt++;
         }
     }

function stopTime(){
    clearTimeout(time);
    cnt=0;
 }

function resetTime(){
    var a1=num1;
    var a2=num2;
    var a3=num3;
    recordTime(a1,a2,a3);
    clearTimeout(time);
    num1,num2,num3=0;
    show.innerHTML=('00:00:00');
    cnt=0;
}

function recordTime(a1,a2,a3){
    var a= (a1<10?'0'+a1:a1)+":"+(a2<10?'0'+a2:a2)+":"+(a3<10?'0'+a3:a3);
    var b="<br>"
    list.innerHTML=list.innerHTML+b+a;
}