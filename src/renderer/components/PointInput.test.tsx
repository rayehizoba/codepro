import '@testing-library/jest-dom';
import {render, fireEvent, Matcher, MatcherOptions} from '@testing-library/react';
import PointInput from './PointInput';

describe('PointInput', () => {

  const getIncrementButton = (getterFn: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement) => {
    return getterFn('increment-button');
  };
  const getDecrementButton = (getterFn: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement) => {
    return getterFn('decrement-button');
  };

  describe('should render formatted value prop', () => {
    test.each([10, 34, 700, 5098])(
      '%ipt',
      (value) => {
        const {getByText} = render(<PointInput value={value} onChange={jest.fn}/>);
        expect(getByText(`${value}pt`)).toBeTruthy();
      },
    );
  });

  describe('decrement button', () => {

    it('should render', () => {
      const {getByTestId} = render(<PointInput value={1} onChange={jest.fn}/>);
      const decrementButton = getDecrementButton(getByTestId);
      expect(decrementButton).toBeTruthy();
    });

    it('should decrement value when clicked', () => {
      const initialValue = 1;
      const expectedValue = initialValue - 1;
      const onChange = jest.fn();
      const {getByTestId} = render(<PointInput value={initialValue} onChange={onChange}/>);
      const decrementButton = getDecrementButton(getByTestId);

      fireEvent.click(decrementButton);
      expect(onChange).toHaveBeenCalledWith(expectedValue);
    });

    it('should be disabled when value <= minValue prop', () => {
      const {getByTestId, debug} = render(<PointInput value={1} minValue={0} onChange={jest.fn}/>);
      const decrementButton = getDecrementButton(getByTestId);

      expect(decrementButton).not.toHaveAttribute('disabled');

      fireEvent.click(decrementButton);
      expect(queryByText('0pt')).toBeTruthy();
      expect(decrementButton).toHaveAttribute('disabled');

      fireEvent.click(decrementButton);
      expect(queryByText('-1pt')).toBeFalsy();
      expect(queryByText('0pt')).toBeTruthy();
    });
  });

  describe('increment button', () => {
    it('should render', () => {
      const {getByTestId} = render(<PointInput value={1} onChange={jest.fn}/>);
      expect(getIncrementButton(getByTestId)).toBeTruthy();
    });

    it('should increment value when clicked', () => {
      const value = 1;
      const {getByTestId, queryByText} = render(<PointInput value={value} onChange={jest.fn}/>);
      fireEvent.click(getByTestId('increment-button'));
      expect(queryByText(`${value + 1}pt`)).toBeTruthy();
    });

    it('should be disabled when value >= maxValue prop', () => {
      const {getByTestId, queryByText} = render(<PointInput value={1} maxValue={2} onChange={jest.fn}/>);
      const incrementButton = getByTestId('increment-button');

      expect(incrementButton).not.toHaveAttribute('disabled');

      fireEvent.click(incrementButton);
      expect(queryByText('2pt')).toBeTruthy();
      expect(incrementButton).toHaveAttribute('disabled');

      fireEvent.click(incrementButton);
      expect(queryByText('3pt')).toBeFalsy();
      expect(queryByText('2pt')).toBeTruthy();
    });
  });

  it('should call onChange prop with value when its changed', () => {
    const value = 1;
    const onChange = jest.fn();
    const {getByTestId} = render(<PointInput value={value} onChange={onChange}/>);
    const decrementButton = getByTestId('decrement-button');
    const incrementButton = getByTestId('increment-button');

    fireEvent.click(decrementButton);
    expect(onChange).toHaveBeenCalledWith(value - 1);

    fireEvent.click(incrementButton);
    expect(onChange).toHaveBeenCalledWith(value);
  });
});
