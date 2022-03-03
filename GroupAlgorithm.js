//그룹 알고리즘: 특정 키 값에 해당하는 그룹화된 합계 리스트 만들기
//컬렉션 형태의 데이터를 특정 키 값으로 그룹화

(function(){

    var records =[
        {Name: "RADIO",Quantity:3},
        {Name: "TV",Quantity:1},
        {Name: "RADIO",Quantity:2},
        {Name: "DVD",Quantity:4},
        {Name: "CD",Quantity:4},
        {Name: "DVD",Quantity:4}
    ];

    var groups =[];
    var N = records.length;

    //이름순으로 정렬
    for(let i=0;i<N-1;i++){
        for(let j=i+1;j<N;j++){
            if(records[i].Name>records[j].Name){
                var temp=records[i];
                records[i] =records[j];
                records[j]=temp;
            }
        }
    }
    //그룹화
    var groupCount = 0; //그룹수
    var subtotal=0; // 소계
    var newRecords =JSON.parse(JSON.stringify(records)); //Deep copy
    for(let i=0;i<N;i++){
        subtotal += newRecords[i].Quantity; //같은 상품명의 수량을 누적
        if(i+1==N || newRecords[i].Name != newRecords[i+1].Name){ //마지막 레코드거나 다음 레코드와 이름이 다르다면
            groups.push(newRecords[i]);

            groups[groupCount].Name = newRecords[i].Name;
            groups[groupCount].Quantity = subtotal;
            groupCount++;
            subtotal = 0;
        }
    }

    //출력
    console.log("[1] 정렬된 원본 데이터: ");
    for(let i=0; i<N;i++){
        console.log(records[i].Name+" - "+records[i].Quantity);
    }
    console.log("[2] 이름으로 그룹화된 데이터: ");
    for(let i=0; i<groupCount;i++){
        console.log(groups[i].Name+" - "+groups[i].Quantity);
    }
})();