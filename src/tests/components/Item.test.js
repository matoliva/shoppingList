import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import Item from '../../components/Item';

describe('<Item />', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            key: 1,
            id: 1,
            onSelectQuantity: jest.fn(),
            name: 'test',
            quantity: 10,
            isSelected: false
        };  

        wrapper = shallow(<Item {...props} />);
    });

    test('should display <Item /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should span tag has "item__check--checked" class when the user click in checkbox input', () => {
        
        wrapper = shallow(<Item {...props} />);

        const inputCheckbox = wrapper.find('input');
        inputCheckbox.simulate('click');
        const spanElement = wrapper.find('span');

        expect(spanElement.hasClass('item__check--checked')).toBe(true);
    });

    test('should span tag has not "item__check--checked" class when the user click in a checked checkbox input', () => {
        const props = {
            key: 1,
            id: 1,
            onSelectQuantity: jest.fn(),
            name: 'test',
            quantity: 10,
            isSelected: true
        };

        wrapper = shallow(<Item {...props} />);

        const inputCheckboxElem = wrapper.find('input');

        inputCheckboxElem.simulate('click');
        
        const spanElement = wrapper.find('span');

        expect(spanElement.hasClass('item__check--checked')).toBe(false);
    });


});