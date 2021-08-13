import { handle } from 'redux-pack';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import { CREATE_TRANSACTION } from '../actions/transactionPackActions';

const initState = {
  ids: [],
  entities: {},
  loadingState:{
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]:false,
  },
  errorState:{
    [CREATE_TRANSACTION]:false,
    [FETCH_TRANSACTION_LIST]:false,
  },
  pagination:{},
  pages:{}
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;

  switch (type) {
    case FETCH_TRANSACTION_LIST:{
      return handle(state,action, {
        start: prevState => ({
          ...prevState,
          loading:true,
          hasError: false,
          loadingState:{
            ...prevState.loadingState,
            [type]:true,
          },
          errorState:{
            ...prevState.errorState,
            [type]:false,
          },
        }),
        success:prevState => {
          const {data}=payload;
          const loadingAndErrorState = {
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: false,
            },
          };
          if (type === FETCH_TRANSACTION_LIST) {
            const { pageNumber, pageSize } = meta || {};
            const ids = data.map(entity => entity['id']);
            const entities = data.reduce(
              (finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
              }),
              {},
            );
            return {
              ...prevState,
              ...loadingAndErrorState,
              ids,
              entities: { ...prevState.entities, ...entities },
              pagination: {
                number: pageNumber,
                size: pageSize,
              },
            };
          } else {
            const id = data['id'];
            return {
              ...prevState,
              ...loadingAndErrorState,
              id,
              entities: { ...prevState.entities, [id]: data },
            };
          }
        },
        failure:prevState=>{
          const {errorMessage}=payload.response.data;
          return{
            ...prevState,
            loading: false,
            hasError: true,
            loadingState:{
              ...prevState.loadingState,
              [type]:false,
            },
            errorState:{
              ...prevState.errorState,
              [type]:errorMessage||true,
            },
          }
        },
      });
    }
    default:
      return state;
  }
};
