var c=[10,"박상현",99,"ㅎㅎ",3,true];

var var6={name:"꾸루",age:3};

const button=document.querySelector(".start");

function go(){
    for(let g of c){
        console.log(typeof(g));
    }
        console.log(typeof(var6.name));
        console.log(typeof(var6.age));
    }

button.addEventListener('click',go);