import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverview';

import TransactionListContainer from './containers/main/TransactionListContainer';
import ModalProvider from './ModalProvider';
import configureStore from './store/configureStore';
import NotificationContainer from './containers/NotificationContainer';
import MainPage from './components/main/MainPage';
import NotFound from './components/NotFound';
class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route
                  path="*"
                  component={NotFound} // match 프로퍼티로 입력한 주소값 전달하기 위해 컴포넌트 프로퍼티 사용
                />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
