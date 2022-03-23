let say = document.querySelector('.dog_says');
let cs = document.querySelector('#console');
const bt= document.querySelector('.button');
const bd=document.querySelector('body');
const hh=document.querySelector('h2');

bt.addEventListener('click',()=>{
    if(cs.value=='불꺼줘'){
        hh.style.color="rgb(255,255,255)";
        hh.innerHTML="불을 끕니다";
        bd.classList.add('visible');
        cs.value='';
    }
    else if(cs.value=='불켜줘'){
        hh.style.color="rgb(255,255,255)";

        hh.innerHTML="불을 켭니다";
        bd.classList.remove('visible');
        cs.value='';
    }
    else if(cs.value=='노래불러줘'){
        hh.innerHTML="니냐니노니녀닌닌니나누나누냐니노니냐니노아아아다시그때로~~니냐니노니냐노닌";
      
        let as= setInterval(function(){
        var a=Math.round(Math.random()*255);
        var b=Math.round(Math.random()*255);
        var c=Math.round(Math.random()*255);
        hh.style.color = "rgb(" + a + "," + b + "," + c + ")";
        },500)
        let st= setTimeout(function(){
            clearInterval(as)
            },5000)
        cs.value='';
    }
    else if(cs.value=='춤추자'){
        hh.innerHTML="ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>ㅡ<ㅇ<ㅡ<~~ㅇ>";
        let sa= setInterval(function(){
        var a=Math.round(Math.random()*255);
        var b=Math.round(Math.random()*255);
        var c=Math.round(Math.random()*255);
        bd.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
        },500)
        let st= setTimeout(function(){
            clearInterval(sa)
            },5000)
        cs.value='';
    }
    else if('경고'){
        hh.style.color="rgb(255,255,255)";
        hh.innerHTML="왈왈~";
        alert("못알아듣겠어유,,");
        cs.value='';
    }
})

