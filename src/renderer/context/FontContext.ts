import React from "react";

export const defaultContext = {
  family: 'JetBrainsMono',
  size: 22,
  leading: 2,
};

const FontContext = React.createContext(defaultContext);

export default FontContext;
