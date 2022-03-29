let say = document.querySelector('.dog_says');
let cs = document.querySelector('#console');
const bt= document.querySelector('.button');
const bd=document.querySelector('body');
const hh=document.querySelector('h2');
var nar = document.getElementById("typed");

var json = 
[
	{
		"question" : "안녕",
		"answer" : "안냥!"
	},
	{
		"question" : "나이",
		"answer" : "비밀이다!"
	},
	{
		"question" : "이름",
		"answer" : "하루~~!"
	}
]

var question = ""; //사용자의 질문을 임시 저장할 변수
var answer = ""; //사용자의 대답을 임시 저장할 변수
var key=0;


function text_check(){
    var value=cs.value;
	
	hh.innerHTML = "이해 못했는데 말을 가르쳐 주실래요?(네 or 아니요)";
    if(value=="네"){
        question = value; //사용자의 질문을 미리 저장
        hh.innerHTML = "방금 말에 대한 원하는 답을 입력해주세요!";
        key = 2;
    }else{
        return;
    }
    
    if(key == 2){
        answer = value; //전역변수 answer값에 사용자의 입력을 저장
        push_json(); //json 데이터에 값을 추가하는 함수 (추후 생성)
    }
    
    for(let i = 0; i < json.length; i++){
        if(value == json[i].question){
            hh.innerHTML = json[i].answer;
            return;
        }
    }
    cs.value='';
}

function push_json(){
    var reply=say;
    json.push({question: `${question}`, answer: `${answer}`});
    reply.innerHTML = "하루가 말을 배웠다!";
	key = 0; //키 값 0으로 초기화
}




bt.addEventListener('click',()=>{
    if(cs.value=='불꺼줘'){
        hh.style.color="rgb(255,255,255)";
        hh.innerHTML="불을 끕니다 왈왈";
        bd.classList.add('visible');
        cs.value='';
    }
    else if(cs.value=='불켜줘'){
        hh.style.color="rgb(255,255,255)";

        hh.innerHTML="불을 켭니다 왈왈";
        bd.classList.remove('visible');
        cs.value='';
    }
    else if(cs.value=='노래해줘'){
        hh.innerHTML="숄라숄라나나나나나ㄴ나는박하루라네하하하하이에에에엥누누나나나나~~니니닌~~~뉴뇬뇨노뇨~~노래부르네~~~이렇게!!!하하하~~~~노래는 즐거워이에에에엥누누나나나나~~니니닌~~~뉴뇬뇨노";
      
        let as= setInterval(function(){
        var a=Math.round(Math.random()*255);
        var b=Math.round(Math.random()*255);
        var c=Math.round(Math.random()*255);
        hh.style.color = "rgb(" + a + "," + b + "," + c + ")";
        bd.style.backgroundColor="rgb(" + c + "," + a + "," + b + ")";
        },300)
        let st= setTimeout(function(){
            clearInterval(as)
            hh.innerHTML="여기까지ㅎㅎ"
            hh.style.color = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
            bd.style.backgroundColor="rgb(" + 170 + "," + 200 + "," + 233 + ")";
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
    else if(cs.value==''){
        var bb=cs.value;
        hh.style.color="rgb(255,255,255)";
        hh.innerHTML=bb+"말을 하세유,,,,~_~";
        cs.value='';
        var typewriter = new Typewriter(nar, {
            loop: true
        });

        typewriter
            .typeString("말을 하셔유,,,")
            .pauseFor(1500)
            .deleteAll()
            .typeString("모르겠으면 밑에 help에 손 올려봐유,,")
            .pauseFor(3000)
            .start();
    }
    else{
        text_check();
        cs.value='';
    }
})
