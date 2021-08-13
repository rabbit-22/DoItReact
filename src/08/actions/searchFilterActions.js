export const SET_FILTER = 'searchFilter/SET_FILTER';

export function setFilter(params){
    return{
        type: SET_FILTER,
        payload: {params},
    }
}