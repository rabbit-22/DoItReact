import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import { requestTransactionList } from '../../actions/transactionActions';

const mapStateToProps = (state) => {
  const { ids, entities } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
