//near algorithm
//근삿값 알고리즘: 가까운 값 구하기

(function () {
   var min = Number.MAX_SAFE_INTEGER;
   
    var numbers = [10, 20, 30, 27, 17];
    var target = 25;
    var near = 0;
    var N = numbers.length;

    for(let i=0; i<N; i++){
        var abs = Math.abs(numbers[i]-target);
        if(abs < min){
            min = abs;
            near = numbers[i];
        }
    }


   console.log(target + "와 가장 가까운 값 :"+near + "(차이: " + min + ")");
})();