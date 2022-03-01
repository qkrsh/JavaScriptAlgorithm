//Average Algorithm
//n명의 점수 중에서 80점 이상 95점 이하인 점수의 평균
(function(){

    //입력
    var data=[90, 65, 78, 50, 95];
    var sum = 0;
    var count =0;
    var N = data.length;
    var avg = 0.0;

  

    //처리
    for(let i = 0 ; i<N; i++){
        if(data[i]>=80 && data[i] <=95){
            sum += data[i];
            count++;
        }
    }
    
    if(sum!= 0 && count !=0){
        avg = sum/count;
    }
    //출력
    console.log("80점 이상 95점 이하인 자료의 평균= "+ avg);
})();