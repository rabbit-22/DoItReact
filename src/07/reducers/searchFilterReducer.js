import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = {};

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch(type) {
    case SET_FILTER: { // 기존 state에 filterName:value 추가하여 반환
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value, // 여러검색 조건을 조합할 수 있도록 기존 검색항목과 새 검색항목을 객체 형태로 병합
      };
    }
    case RESET_FILTER: { // 초깃값 반환
      return initState;
    }
    default:
      return state;
  }
}