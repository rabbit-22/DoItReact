import React, { PureComponent } from 'react';
import Modal from '../06/Modal';
import Button from '../04/Button';
import Text from '../04/Text';

class ButtonWithModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false }; // 모달 출력상태를 state에 저장
  }
  render() {
    return (
      <React.Fragment>
        <Button onPress={() => this.setState({ showModal: true })}>삭제</Button>{' '}
        {/* 버튼 눌릴때 출력 state 변경 */}
        {this.state.showModal && ( // state 출력 상태 값이 변경되면 모달 박스 출력
          <Modal>
            <div>
              <Text>정말로 삭제하겠습니까?</Text>
            </div>
            <Button primary>예</Button>
            <Button onPress={() => this.setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonWithModal;
