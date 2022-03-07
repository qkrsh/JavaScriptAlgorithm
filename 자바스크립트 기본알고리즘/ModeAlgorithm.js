//최빈값 알고리즘

(function(){

    var scores=[1,3,4,3,5];
    var mode = 0;//최빈값이 담길 그릇
    var indexes = Array(6).fill(0);
    var max = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < scores.length; index++) {
        indexes[scores[index]]++;        
    }

    for(let i=0; i<indexes.length; i++){
        if(indexes[i] > max){
            max = indexes[i];
            mode = i;
        }
    }

    console.log("최빈값: +"+mode + " -> "+max+"번 나타남");


})();