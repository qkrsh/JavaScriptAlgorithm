function Hi(name, age){
    this.name = name;
    this.age=age;
    this.sayName=function(){
        console.log(this.name);
    }
};

var per1 = new Hi("sang",25);
var per2 = new Hi("hyun",18);