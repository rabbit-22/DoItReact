import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';

import { requestTransactionList } from '../../actions/transactionPackActions';
import {
  transactionListSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => ({
  transactions: transactionListSelector(state),
  loading: transactionListLoadingStateSelector(state),
});

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
