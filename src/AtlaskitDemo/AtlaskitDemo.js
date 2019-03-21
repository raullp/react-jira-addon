import React, { Fragment } from 'react';
import Code from './components/Code';
import Comment from './components/Comment';
import '@atlaskit/css-reset';

export default function AtlaskitDemo() {
  return (
    <Fragment>
      <Comment />
      <Code/>
    </Fragment>    
  );
}
