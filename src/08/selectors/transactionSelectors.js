import { createSelector } from "reselect";
import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from "../actions/transactionPackActions";

export const transactionsSelector = state => state.transactions; // 스토어 데이터에서 거래 정보를 추출하는 셀렉터

export const transactionListSelector = createSelector(
    [transactionsSelector],
    (transactions)=>{
        const {ids, entities}=transactions; 
        return ids.map(id=>entities[id]);
    }
    );

export const loadingStateSelector = // 거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터
state => transactionsSelector(state).loadingState; 

export const transactionListLoadingStateSelector = state => // 전체 거래 목록 요청의 로딩 상태만 추출 
loadingStateSelector(state)[FETCH_TRANSACTION_LIST];

export const transactionCreateLoadingStateSelector = state => // 거래 생성 요청의 로딩 상태만 추출
loadingStateSelector(state)[CREATE_TRANSACTION];