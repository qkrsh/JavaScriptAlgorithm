// 개수 알고리즘 count Algorithm

//1부터 1000까지의 정수중 13의 배수의 개수

var N=0;
var sum=0;

for (let index = 0; index < 1000; index++) {
    if(index%13==0){
        N++;
        sum+=index;
    }    
}

console.log("1부터 1000까지의 정수중 13의 배수의 개수= "+N);
console.log("1부터 1000까지의 정수중 13의 배수의 합= "+sum);