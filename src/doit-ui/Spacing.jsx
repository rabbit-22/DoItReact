import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from './withStyles';
import { unit } from './Theme';

export const propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

class Spacing extends PureComponent {
  render() {
    const { children, top, left, right, bottom, vertical, horizontal } = this.props;
    const computedTop = top ? top : vertical; // vertical, horizontal 은 간격을 동일하게 설정
    const computedBottom = bottom ? bottom : vertical;
    const computedLeft = left ? left : horizontal;
    const computedRight = right ? right : horizontal;

    const computedStyles = {
      flex: 1, // flex의 값이 1이면 하위 요소가 동일한 비율로 채워짐
      ...(computedTop && { marginTop: computedTop * unit }), // computeTop에 값이 있으면 {marginTop:computedTop * unit}을 computeStyles 객체에 추가
      ...(computedBottom && { marginBottom: computedBottom * unit }),
      ...(computedLeft && { marginLeft: computedLeft * unit }),
      ...(computedRight && { marginRight: computedRight * unit }),
    };

    return <div {...css(computedStyles)}>{children}</div>;
  }
}

Spacing.propTypes = propTypes;

export default Spacing;
