import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default props => {
  const { src } = props;
  return (
    <SyntaxHighlighter lineProps={{ style: { paddingBottom: 8 } }} language="javascript" style={tomorrow}>
      {src}
    </SyntaxHighlighter>
  );
};
