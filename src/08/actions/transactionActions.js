// 거래 목록 정보를 리덕스 스토어에 저장하기 위한 액션 파일
import Api from '../Api';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';

export function setTransactionList(transactions) {
    return {
      type: SET_TRANSACTION_LIST,
      payload: transactions,
    };
  }

export function loading(){
  return {
    type:LOADING_TRANSACTION_LIST,
  };
}
export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: {errorMessage},
  };
}

export function requestTransactionList(params){
  return(dispatch)=>{
    dispatch(loading());
    Api.get('/transactions',{params}).then(({data})=>dispatch(setTransactionList(data)),
    error=>dispatch(setError(error.response.data.errorMessage))
    );
}
}