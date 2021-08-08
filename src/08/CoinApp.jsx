import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverview';

import TransactionListContainer from './containers/main/TransactionListContainer';
import configureStore from './store/configureStore';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppLayout>
          <CoinOverview />
          <TransactionListContainer />
        </AppLayout>
      </Provider>
    );
  }
}

export default CoinApp;
