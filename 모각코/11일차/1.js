let say = document.querySelector('.dog_says');
let cs = document.querySelector('#console');
const bt= document.querySelector('.button');
const bd=document.querySelector('body');
const hh=document.querySelector('h2');

bt.addEventListener('click',()=>{
    if(cs.value=='불꺼줘'){
        hh.innerHTML="불을 끕니다";
        bd.classList.add('visible');
    }
    else if(cs.value=='불켜줘'){
        hh.innerHTML="불을 켭니다";
        bd.classList.remove('visible');
    }
    else if(cs.value=='노래불러줘'){
        hh.innerHTML="니냐니노니녀닌닌니냐니노니냐니노아아아다시그때로~~니냐니노니냐노닌";
        setInterval(col,500);
    }
    else if(cs.value=='그만'){
        clearInterval(col);
        say.style.color="black"
        hh.innerHTML="왈왈~";
    }
    else if('경고'){
        hh.innerHTML="왈왈~";
        alert("못알아듣겠어유,,");
    }
})

function col(){
    var a=Math.round(Math.random()*255);
    var b=Math.round(Math.random()*255);
    var c=Math.round(Math.random()*255);
    say.style.color = "rgb(" + a + "," + b + "," + c + ")";
}