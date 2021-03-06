import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params, // 검색입력 항목 스토어 데이터 추가
});
export default connect(mapStateToProps)(TransactionSearchFilter);
