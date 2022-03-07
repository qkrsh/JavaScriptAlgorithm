//검색 알고리즘(search algorithm)

//주어진 데이터에서 특정 데이터 찾기

(function(){
    
    var data = [1, 3, 5, 7, 9];
    var N = data.length;
    var search =3; //검색할 데이터

    var flag = false; //찾았는지 못찾았는지
    var index = -1; //찾은 위치

    //binary search사용
    var low =0;
    var high =N-1;
    while(low <= high){
        var mid = parseInt((low +high)/2);
        if(data[mid]==search){
            flag=true;
            index=mid;
            break;
        }
        if(data[mid]>search){
            high = mid -1;
        }
        else{
            low = mid + 1;
        }
    }

    if(flag===true){
        console.log(search +"을 "+index+"위치에서 찾았습니다");
    }
    else{
        console.log("못찾았습니다....");
    }

})();