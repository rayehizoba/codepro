import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HomePage from "./HomePage";

describe('HomePage', () => {
  it('should render', () => {
    expect(render(<HomePage />)).toBeTruthy();
  });
});
