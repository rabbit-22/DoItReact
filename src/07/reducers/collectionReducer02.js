// reduce 함수를 사용하여 객체 배열을 해시맵 형태의 객체로 변환 

import { SET_COLLECTION } from '../actions/collectionActions01';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
        //payload 하위에 ids와 entities 저장
      const ids = payload.map(entity => entity['id']);
      // 데이터가 저장되는 순서를 ids에 저장하기 위해 map함수로 배열 객체의 id값 추출
      const entities = payload.reduce( // 실제 데이터는 reduce를 사용하여 객체로 변환한 후 entities에 저장
        (finalEntities, entity) => ({
          ...finalEntities, 
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};