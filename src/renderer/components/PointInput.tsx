import React from 'react';
// import useUpdatableState from '@landisdesign/use-updatable-state';

interface Props {
  value: number;
  minValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
}

function PointInput(props: Props) {
  const {
    value,
    minValue = PointInput.defaultProps.minValue,
    maxValue = PointInput.defaultProps.maxValue,
    onChange,
  } = props;
  // const [inputValue, setInputValue] = useUpdatableState(value);
  const shouldIncrement = value < maxValue;
  const onIncrement = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (shouldIncrement) onChange?.(value + 1);
  };
  const shouldDecrement = value > minValue;
  const onDecrement = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (shouldDecrement) onChange?.(value - 1);
  };

  // React.useEffect(() => {
  //   onChange?.(inputValue);
  // }, [onChange, inputValue]);

  return (
    <div className="flex items-center space-x-2">
      <div className="text-black/50 dark:text-white/50 text-xs font-medium">
        {value}pt
      </div>
      <div className="flex items-center bg-light-steel-blue dark:bg-charcoal rounded-md text-lg text-black/75 dark:text-white/75 leading-snug overflow-hidden">
        <button
          onClick={onDecrement}
          disabled={!shouldDecrement}
          className="px-2 active:bg-black/10 dark:active:bg-eerie-black/75 rounded-md disabled:opacity-25 disabled:transition"
          type="button"
          data-testid="decrement-button"
        >
          <i className="mdi mdi-minus" />
        </button>
        <div className="h-4 border-charcoal/10 dark:border-gainsboro/20 border-l" />
        <button
          onClick={onIncrement}
          disabled={!shouldIncrement}
          className="px-2 active:bg-black/10 dark:active:bg-eerie-black/75 rounded-md disabled:opacity-25 disabled:transition"
          type="button"
          data-testid="increment-button"
        >
          <i className="mdi mdi-plus" />
        </button>
      </div>
    </div>
  );
}

PointInput.defaultProps = {
  minValue: -Infinity,
  maxValue: Infinity,
};

export default PointInput;
