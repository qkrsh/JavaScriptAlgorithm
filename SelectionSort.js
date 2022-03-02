//선택정렬 Selection Sort

//가장 작거나 큰 데이터와 자리를 바꾸는 식으로 반복 비교

//가장 작은 데이터를 왼쪽으로 하나씪 채우는 형태

//시간복잡도는 O(n^2)
//무작위 데이터를 순서대로 오름차순 혹으 내림차순으로 정렬

(function(){
        var data = [3, 2, 1, 5, 4];
        var N = data.length;
        var temp=0;

        for(let i =0; i<N-1;i++){
            for (let j = i+1; j < N; j++) {
                if(data[i]>data[j]){
                    temp=data[i];
                    data[i]=data[j];
                    data[j]=temp;
                }
            }
            console.log((i+1)+"회전: ");
            for(let i=0; i<N; i++){
                console.log(data[i]);
            }
        }
        console.log("완료");

        for (let index = 0; index < N; index++) {
            console.log(data[index]);            
        }
})();