//n명의 점수 중에서 80점 이상인 점수의 합계
// 합계 알고리즘 (Sum Algorithm)

// 입력
var scores = [100, 75, 50, 37, 90, 95];
var sum = 0;
var N = scores.length;


//처리
for(i=0; i<N; i++){
    if (scores[i] >=80){
        sum = sum + scores[i];
    }
}

//출력
console.log(N +"명의 점수 중 80점 이상의 총점= " + sum);