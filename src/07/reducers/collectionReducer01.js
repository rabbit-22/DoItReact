const initState = {
    ids: [], // 데이터의 순서
    entities: [], // 해시맵 형태 데이터 저장
};


export default (state=initState, action) => {
    const {type, payload} = action;
    switch(type){
        default:
            return state;
    }
};

// 검색에 대한 속도 최적화 위한 해시맵 구조 도입
// 해시맵은 데이터의 순서 따지지 않으므로 보완하기 위해 그래프에 저장되는 데이터의 순서를 따로 배열로 저장 
