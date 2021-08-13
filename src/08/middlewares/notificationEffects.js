import { showMessage} from "../actions/notificationActions";
import { KEY,LIFECYCLE } from "redux-pack";

export default store => nextRunner => action => {
    const {meta} = action;
    if(meta && meta.notification){
        const {success, error} = meta.notification;
        if(success &&meta[KEY.LIFECYCLE]===LIFECYCLE.SUCCESS){
            store.dispatch(showMessage(success));
        }else if(error && meta[KEY.LIFECYCLE]===LIFECYCLE.FAILURE) {
            store.dispatch(showMessage(error,true));
        }
    }
    // else if(type===FETCH_TRANSACTION_LIST&&meta[KEY.LIFECYCLE]===LIFECYCLE.FAILURE){
    //     const {errorMessage} = payload.response.data || {};
    //     store.dispatch(showMessage(errorMessage.dispatch,true));
    // }
    // else if(type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE]===LIFECYCLE.SUCCESS){
    //     const message = '거래 목록을 최신 정보로 업데이트했습니다.';
    //     store.dispatch(showMessage(message));
    // }
    return nextRunner(action);
}