import '@testing-library/jest-dom';
import HomePage from './HomePage';
import { renderWithRedux } from '../lib/testHelpers';

describe('HomePage', () => {
  it('should render', () => {
    expect(renderWithRedux(<HomePage />)).toBeTruthy();
  });
});
