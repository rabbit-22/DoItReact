import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../../03/Input';

describe('<input>', () => {
  it('has one element', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
});
