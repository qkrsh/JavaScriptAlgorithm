//점수 데이터에 대한 순위 구하기
//주어진 범위 데이터의 등수를 구하기
(function(){

    var scores = [90, 87, 100, 95, 80];
    var N = scores.length;
    var rankings= Array(N).fill(1);

    for(let i =0;i<N;i++){
        rankings[i] =1;
        for (let j = 0; j < N; j++) {
            if(scores[i]<scores[j]){
                rankings[i]++;
            }            
        }
    }


    for (let index = 0; index < scores.length; index++) {
        console.log(scores[index] + "점 : "+rankings[index]+"등");
    }



})();