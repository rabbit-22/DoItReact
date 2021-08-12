import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { requestTransactionList } from '../../actions/transactionPackActions';

export default connect(null, { requestTransactionList })(TransactionSearchFilter);
