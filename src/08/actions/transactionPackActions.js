import Api from "../Api";
export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

export function createTransaction(data,onComplete){
    return {
        type: CREATE_TRANSACTION,
        promise: Api.post('/transactions',data),
        meta:{
            onSuccess:onComplete,
            notification:{
                success:'거래가 성공적으로 완료되었습니다.',
            }
        },
    };
}
export function requestTransactionList(params){
    return{
        type:FETCH_TRANSACTION_LIST,
        promise:Api.get('/transactions', {params}),
        meta:{
            notification:{
                error: '거래목록을 갱신하는 중에 문제가 발생했습니다.'
            },
        },
    };
}