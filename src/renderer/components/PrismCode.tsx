import React from 'react';
import Prism from 'prismjs';
// import * as Prism from 'prismjs';
import classNames from 'classnames';

// const loadLanguages = require('prismjs/components/');

interface PrismCodeProps {
  code: string;
  plugins: string[];
  language: string;
  className: any;
}

export default function PrismCode(props: PrismCodeProps) {
  const { code, plugins, language, className } = props;
  const ref = React.useRef(null);

  React.useEffect(() => {
    window.Prism = window.Prism || {};
    Prism.manual = true;
    if (ref && ref.current) {
      // loadLanguages([language]);
      Prism.highlightElement(ref.current);
    }
  }, []);

  return (
    <pre className={classNames(className, !plugins ? '' : plugins.join(' '), 'prism-live')}>
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
}
