import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import AmountInput from '../../components/AmountInput';

describe('AmountInput Component', () => {

    // It's inicialized in order to have the intellisense.
    let wrapper = shallow(<AmountInput onSelectQuantity={() => { }} />);
    let useEffect;
    let props;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    }

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect");

        props = { onSelectQuantity: jest.fn() };

        mockUseEffect();
        mockUseEffect();

        wrapper = shallow(<AmountInput onSelectQuantity={() => { }} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should display <AmountInput /> correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should display quantity prop by parameters', () => {
        const quantityMock = 10;
        const wrapper = shallow(<AmountInput quantity={quantityMock} onSelectQuantity={() => { }} />);

        const spanText = wrapper.find('span').text();
        expect(spanText).toBe('10');
    });

    test('should increment by 1 when the user click the +1 button', () => {

        const btnAddElement = wrapper.find('#btn-add');
        btnAddElement.simulate('click');

        const spanText = wrapper.find('span').text();

        expect(spanText).toBe('1');
    });

    test('should decrement by 1 when the user click the -1 button', () => {
        const quantityValue = 1;
        const wrapper = shallow(<AmountInput quantity={quantityValue} onSelectQuantity={() => { }} />);

        const btnSubtractElement = wrapper.find('#btn-subtract');

        btnSubtractElement.simulate('click');
        const spanText = wrapper.find('span').text();

        expect(spanText).toBe('0');
    });

    test('should not subtract when the quantity is 0 and the user click -1 button', () => {

        const btnSubtractElement = wrapper.find('#btn-subtract');

        btnSubtractElement.simulate('click');
        const spanText = wrapper.find('span').text();

        expect(spanText).toBe('0');
    });

    test('should call onSelectQuantity when the user click +1 button', () => {

        wrapper = shallow(<AmountInput {...props} />);
        const btnAddElement = wrapper.find('#btn-add');
        btnAddElement.simulate('click');

        expect(props.onSelectQuantity).toHaveBeenCalledTimes(1);

    });

    test('should call onSelectQuantity when the user click -1 button', () => {

        wrapper = shallow(<AmountInput {...props} />);
        const btnAddElement = wrapper.find('#btn-subtract');
        btnAddElement.simulate('click');

        expect(props.onSelectQuantity).toHaveBeenCalledTimes(1);

    });

});