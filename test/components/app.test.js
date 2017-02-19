import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from 'components/app';

describe('<App />', () => {
	const wrapper = shallow(<App />);

	it('should render content', () => {
		expect(wrapper.find('.fadeIn')).toExist();
	})
})