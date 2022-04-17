import React from 'react';
import Prism from 'prismjs';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectFontSizeFormatted } from '../store/font/font.selectors';

// const loadLanguages = require('prismjs/components/');

interface PrismCodeProps {
  code: string;
  language: string;
  plugins?: string[];
  className?: object | string;
  style?: object;
}

export default function PrismCode(props: PrismCodeProps) {
  const { code, plugins, language, className, style } = props;
  const ref = React.useRef(null);
  const fontSize = useSelector(selectFontSizeFormatted);

  React.useEffect(() => {
    window.Prism = window.Prism || {};
    Prism.manual = true;
    if (ref && ref.current) {
      // loadLanguages([language]);
      Prism.highlightElement(ref.current);
    }
  }, []);

  return (
    <pre
      className={classNames(
        className,
        !plugins ? '' : plugins.join(' '),
        'prism-live'
      )}
      style={{ ...style, fontSize }}
    >
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
}

PrismCode.defaultProps = {
  plugins: null,
  className: null,
  style: null,
};
