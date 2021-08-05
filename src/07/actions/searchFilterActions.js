// 액션 구성 (검색 단어를 저장하는 액션)
export const SET_FILTER = 'searchFilter/SET_FILTER';

export const setFilter = (filterName, value) => ({
  type: SET_FILTER,
  payload: {
    filterName, // 검색하고자 하는 항목 (ex. age)
    value,      // 검색값  (ex. 21)
  },
});

export const RESET_FILTER = 'searchFilter/RESET_FILTER';

export const resetFilter = () => ({
  type: RESET_FILTER,
});

export const setNameFilter = name => setFilter('name', name);
export const setAgeFilter = age => setFilter('age', age);
export const setIdFilter = id => setFilter('id', id);