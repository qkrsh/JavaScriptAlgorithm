//배열메소드
//forEach
let arr=["Mike","Tom","Jane"];

arr.forEach((name,index)=>{
    console.log(name);
})

//map
 let userList=[
    {name:"Mike", age:30},
    {name:"Jane", age:27},
]

let newUserLisrt=userList.map((user,index)=>{
    return Object.assign({},user,{
        id:index+1,
        isAdult:user.age>19,
    })
});

console.log(newUserLisrt);

const mike={
    name:"Mike",
};

const tom={
    name:"Tom",
};

//sort
let arr2=[27,8,5,13];

arr.sort((a,b)=>{
    return a-b;
});

console.log(arr2);

//reduce
let arr3=[1,2,3,4,5];
const result=arr.reduce((prev,cur)=>{
    prev + cur;
    return prev;
},0);

console.log(result); 

let userList2=[
    {name:"Mike", age:30},
    {name:"Jane", age:27},
]

let result2=userList2.reduce((prev, cur)=>{
    if(cur.age>19){
        prev.push(cur.name);
    }
    return prev;
},[]);

console.log(result2);

//나머지매개변수

function add(...numbers){
    let result3=0;
    numbers.forEach((num)=>(result3+=num));
    console.log(result3);
}

add(1,2,3);
add(5,8);
//-------------
function User(name,age,...skills){
    this.name=name;
    this.age=age;
    this.skills=skills;
}

const user1 = new User("Mike",30, "html","css");
const user2 = new User("Tom",20, "html","css","Js","react");

console.log(user1);
console.log(user2);

//전개구문

let arr4=[1,2,3];
let arr5=[...arr4]; //이런식으로 복사

let user3 = {name:"Mk",age:30};
let user4 = {...user3};

//배열끼리 합칠때도 가능 arr1=[...arr2, ...arr3]; 이런느낌으로

//call
const mikee={
    name:"Mikee",
}

function showTime(){
    console.log(this.name);
};

showTime.call(mikee);

//call의 다른예시
const tomm={
    name:"tomm",
}

function update(job,age){
    this.job=job;
    this.age=age;
};

update.call(tomm,"목수",33);

console.log(tomm);

//apply는 call과 같은데 매개변수 형식이 배열임
//bind는 함수의 this값을 영구히 바꿀수있음

const updateTomm = update.bind(tomm);
//이런식으로 하면 updateTomm이라는 함수의 this는 tomm으로 영구히 바뀐거임

//prototype
const car={
    wheels:4,
    drive(){
        console.log("drive,,");
    },
};

const bmw={
    color:"red",
    navigation:1,
};

bmw.__proto__ = car;
//car가 bmw의 프로토타입이 된거임 다시 말하면 bmw는 car를 상속받았다라고도 가능
bmw.drive();//따라서 이 car의 함수도 bmw에서 가능함ㅎㅎ

const x5={
    color:"white",
    name:"x5",
};

x5.__proto__=bmw;
//x5는 bmw를 상속받았음

//이번엔 생성자를 이용해보자

const Bmw = function(color){
    this.color=color;
}
Bmw.prototype.wheels=4;
Bmw.prototype.drive=function(){
    console.log("drive!!");
};

const x7 = new Bmw("red");   //이렇게 생성자를 이용하여 
x7.drive();    


//promiss   

