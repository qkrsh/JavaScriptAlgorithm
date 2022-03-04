//MaxAlgorithm

(function () {
    var max = Number.MIN_SAFE_INTEGER;//숫자 형식 중 가장 작은 값으로 초기화

    var numbers = [-2, -5, -3, -7, -1];
    var N = numbers.length;

    for(var i =0; i<N; i++){
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    console.log("최댓값 : "+max);
})();