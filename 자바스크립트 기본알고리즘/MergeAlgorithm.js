//merge algorithm
//병합 알고리즘

(function(){

    var first = [1,3,5];
    var second = [2,4];

    var M = first.length;
    var N = second.length;

    var merge = Array(M+N).fill(0);
    var i =0;
    var j =0;
    var k = 0;

    while(i<M && j<N){//둘중 하나라도 배열의 끝에 도달할때까지
        if(first[i] < second[j]){
            merge[k++] = first[i++];    
        }else{
            merge[k++] =second[j++];
        }
    }

    while(i<M){
        merge[k++] = first[i++];    
    }
    
    while(j<N){
        merge[k++] =second[j++];
    }

    for(let i =0; i<M+N; i++){
        console.log(merge[i]);
    }




})();