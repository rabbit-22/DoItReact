// 스토어 데이터와 액션을 RegisterPage와 연결하기 위한 데이터 컴포넌트
import { connect } from 'react-redux';
import RegisterPage from '../../components/signup/RegisterPage';
import { createUser } from '../../actions/userActions';
import { userCreateLoadingStateSelector } from '../../selectors/userSelectors';

export default connect(
  (state) => ({
    loading: userCreateLoadingStateSelector(state),
  }),
  { createUser },
)(RegisterPage);
