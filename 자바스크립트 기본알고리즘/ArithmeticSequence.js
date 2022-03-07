//등차수열을 이용

//1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램
//1, 3, 5, 7, 9...


var sum=0;
var sequence = "";
for (let i = 0; i <= 20; i++) {
    if (i %2==0) {
        continue;
    }else{
        sum+=i;
        sequence = sequence + i + " ";
    }
}
console.log(sequence);
console.log("합= "+sum);