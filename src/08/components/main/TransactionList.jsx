import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
import Api from '../../Api';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';
class TransactionList extends PureComponent {
  state = {
    transactions: [],
  };
  componentDidMount() {
    Api.get('/transactions', { params: { code: 'BTX' } }).then((response) =>
      this.setState({ transactions: response.data }),
    );
  }
  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

export default TransactionList;
