import PrismCode from './PrismCode';
import { renderWithRedux } from '../lib/testHelpers';
import { selectFontSizeFormatted } from '../store/font/font.selectors';

describe('PrismCode', () => {
  const JSCode = `const App = props => {
    return (
      <div>
        <h1> Prism JS </h1>
        <div>Awesome Syntax Highlighter</div>
      </div>
    );
  };
  `;

  it('should render', () => {
    const { container } = renderWithRedux(
      <PrismCode code={JSCode} language="js" />
    );
    expect(container).toBeTruthy();
    expect(container.firstChild).toHaveClass('prism-live');
    expect(container.firstChild).toHaveClass('language-js');
  });

  it('should merge className and style props', () => {
    const className = 'foo';
    const style = { fontSize: '12pt' };
    const language = 'js';
    const { container } = renderWithRedux(
      <PrismCode
        code={JSCode}
        language={language}
        className={className}
        style={style}
      />
    );

    expect(container.firstChild).toHaveClass(className);
    expect(container.firstChild).toHaveStyle(style);
  });

  it('should render with correct font size', () => {
    const initialState = { font: { size: 200 } };
    const { container } = renderWithRedux(
      <PrismCode code={JSCode} language="js" />,
      initialState
    );
    const expectedStyle = { fontSize: selectFontSizeFormatted(initialState) };
    expect(container.firstChild).toHaveStyle(expectedStyle);
  });
});
