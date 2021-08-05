// 검색창 구현 ( 데이터 컴포넌트 )
import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../../04/InputWithStyle';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || ''; // 검색 항목 키 전달

  return {
    value,
  };
};

const mapDispatchToProps = {
  onChange: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
