import '@testing-library/jest-dom';
import {
  render,
  fireEvent,
  Matcher,
  MatcherOptions,
} from '@testing-library/react';
import PointInput from './PointInput';

describe('PointInput', () => {
  const getIncrementButton = (
    getterFn: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement
  ) => {
    return getterFn('increment-button');
  };
  const getDecrementButton = (
    getterFn: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement
  ) => {
    return getterFn('decrement-button');
  };

  describe('should render formatted value prop', () => {
    test.each([10, 34, 700, 5098])('%ipt', (value) => {
      const { getByText } = render(
        <PointInput value={value} onChange={jest.fn} />
      );
      expect(getByText(`${value}pt`)).toBeTruthy();
    });
  });

  describe('decrement button', () => {
    it('should render', () => {
      const { getByTestId } = render(
        <PointInput value={1} onChange={jest.fn} />
      );
      const decrementButton = getDecrementButton(getByTestId);
      expect(decrementButton).toBeTruthy();
    });

    it('should decrement value when clicked', () => {
      const initialValue = 1;
      const onChange = jest.fn();
      const { getByTestId } = render(
        <PointInput value={initialValue} onChange={onChange} />
      );
      const decrementButton = getDecrementButton(getByTestId);

      fireEvent.click(decrementButton);

      const expectedValue = initialValue - 1;
      expect(onChange).toHaveBeenCalledWith(expectedValue);
    });

    describe('should be disabled when value <= minValue prop', () => {
      const minValue = 0;
      test.each([minValue, minValue - 1, minValue - 10])(
        `given value %i and minValue ${minValue}`,
        (value) => {
          const { getByTestId } = render(
            <PointInput onChange={jest.fn} value={value} minValue={minValue} />
          );
          const decrementButton = getDecrementButton(getByTestId);

          expect(value).toBeLessThanOrEqual(minValue);
          expect(decrementButton).toBeDisabled();
        }
      );
    });

    it('should be enabled when value > minValue prop', () => {
      const { getByTestId } = render(
        <PointInput onChange={jest.fn} value={1} minValue={0} />
      );
      const decrementButton = getDecrementButton(getByTestId);
      expect(decrementButton).toBeEnabled();
    });
  });

  describe('increment button', () => {
    it('should render', () => {
      const { getByTestId } = render(
        <PointInput value={1} onChange={jest.fn} />
      );
      const incrementButton = getIncrementButton(getByTestId);
      expect(incrementButton).toBeTruthy();
    });

    it('should increment value when clicked', () => {
      const initialValue = 1;
      const onChange = jest.fn();
      const { getByTestId } = render(
        <PointInput value={initialValue} onChange={onChange} />
      );
      const incrementButton = getIncrementButton(getByTestId);

      fireEvent.click(incrementButton);

      const expectedValue = initialValue + 1;
      expect(onChange).toHaveBeenCalledWith(expectedValue);
    });

    describe('should be disabled when value >= maxValue prop', () => {
      const maxValue = 0;
      test.each([maxValue, maxValue + 1, maxValue + 10])(
        `given value %i and maxValue ${maxValue}`,
        (value) => {
          const { getByTestId } = render(
            <PointInput onChange={jest.fn} value={value} maxValue={maxValue} />
          );
          const incrementButton = getIncrementButton(getByTestId);

          expect(value).toBeGreaterThanOrEqual(maxValue);
          expect(incrementButton).toBeDisabled();
        }
      );
    });

    it('should be enabled when value < maxValue prop', () => {
      const { getByTestId } = render(
        <PointInput onChange={jest.fn} value={0} maxValue={1} />
      );
      const incrementButton = getIncrementButton(getByTestId);
      expect(incrementButton).toBeEnabled();
    });
  });
});
