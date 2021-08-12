// 거래 목록 정보를 리덕스 스토어에 저장하기 위한 액션 파일
import Api from '../Api';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';
export const TRADE_COMPLETE = 'transaction/TRADE_COMPLETE'; // 서버에 거래 생성을 요청하는 액션함수 추가 
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
export function tradeComplete(){
  return {type:TRADE_COMPLETE};
}
export function createTransaction(data,onComplete) {
  return dispatch => Api.post('/transactions', data).then(({data})=>{
    dispatch(tradeComplete());
    onComplete();
  },
  error=>dispatch(setError(error.response.data.errorMessage)),
  );
}
export function requestTransactionList(params){
  return(dispatch)=>{
    dispatch(loading());
    Api.get('/transactions',{params}).then(({data})=>dispatch(setTransactionList(data)),
    error=>{
      dispatch(setError(error.response.data.errorMessage));
    }
    );
}
}