// 거래 목록 정보를 리덕스 스토어에 저장하기 위한 액션 파일
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
    return {
      type: SET_TRANSACTION_LIST,
      payload: transactions,
    };
  }
