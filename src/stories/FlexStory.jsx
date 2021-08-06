import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Doit-UI/Flex', module).addWithJSX('flexDirection 예제', () => (
  <div>
    <h4>flexDirection: 'row'</h4>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
    </div>
    <h4>flexDirection: 'column'</h4>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
    </div>
  </div>
));
