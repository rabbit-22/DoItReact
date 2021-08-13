// 검색 정보를 저장할 리듀서
import {SET_FILTER} from '../actions/searchFilterActions';

const initState={
    params:{},
};

export default (state=initState,action)=>{
    const {type, payload} = action;
    switch(type){
        case SET_FILTER:{
            const {params} = payload;
            return {...state,params};
        }
        default:
            return state;
    }
};
