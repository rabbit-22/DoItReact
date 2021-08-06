import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <thead>
        {React.Children.map(
          children,
          (
            child, // React.Children.map()은 자식 프로퍼티에 포함된 jsx의 컴포넌트 엘리먼트를 배열처럼 취급
          ) =>
            React.cloneElement(
              child, // React.cloneElement을 사용하여 각각 자식 컴포넌트에 추가 프로퍼티(isHeader) 전달
              { isHeader: true },
            ),
        )}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;
