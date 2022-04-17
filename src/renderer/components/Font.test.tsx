import '@testing-library/jest-dom';
import {renderWithRedux, within, fireEvent} from "../lib/testHelpers";
import Font from "./Font";

describe('Font', () => {
  it('should render', () => {
    expect(renderWithRedux(<Font/>)).toBeTruthy();
  });

  describe('font size', () => {

    it('should render a default value of 22pt', () => {
      const {getByTestId} = renderWithRedux(<Font/>);
      const fontSize = within(getByTestId('font-size')).getByText('22pt');
      expect(fontSize).toBeTruthy();
    });

    it('should increment when font size button is clicked', () => {
      const {getByText} = renderWithRedux(<Font/>);
      expect(getByText('22pt')).toBeTruthy();

      fireEvent.click(getByText(/font size/i));
      expect(getByText('23pt')).toBeTruthy();
    });

    it('should increment up to max value of 40pt when increment button is clicked', () => {
      const {queryByText, getByTestId} = renderWithRedux(<Font/>, {font: {size: 39}});
      const incrementButton = within(getByTestId('font-size')).getByTestId('increment-button');
      expect(queryByText('39pt')).toBeTruthy();

      fireEvent.click(incrementButton);
      expect(queryByText('40pt')).toBeTruthy();

      fireEvent.click(incrementButton);
      expect(queryByText('40pt')).toBeTruthy();
      expect(queryByText('41pt')).toBeFalsy();
    });

    it('should decrement down to min value of 2pt when decrement button is clicked', () => {
    });
  });

  describe('font family', () => {
  });

  describe('line spacing', () => {
  });
});
