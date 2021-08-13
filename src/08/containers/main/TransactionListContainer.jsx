import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import {
  FETCH_TRANSACTION_LIST,
  requestTransactionList,
} from '../../actions/transactionPackActions';

const mapStateToProps = (state) => {
  const { ids, entities, loadingState } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  const transactions = ids.map((id) => entities[id]);

  return { transactions, loading };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
