//MinAlgorithm
//주어진 데이터 중에서 가장 작은 짝수 값

(function () {
    var min = Number.MAX_SAFE_INTEGER;//숫자 형식 중 가장 큰 값으로 초기화

    var numbers = [2, 5, 3, 7, 1];
    var N = numbers.length;

    for(var i =0; i< N; i++){
        if (numbers[i] < min && numbers[i]%2==0) {
            min = numbers[i];
        }
    }

    console.log("짝수 최솟값 : "+min);
})();