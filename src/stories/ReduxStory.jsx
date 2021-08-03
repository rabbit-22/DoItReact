import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';

storiesOf('ReduxApp', module).addWithJSX('기본 스토어 설정', () => <ReduxApp01 />);
