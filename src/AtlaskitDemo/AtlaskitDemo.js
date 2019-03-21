import React, { Fragment } from 'react';
import Code from './components/Code';
import Comment from './components/Comment';
import '@atlaskit/css-reset';

const content = (<Code/>);

export default function AtlaskitDemo() {
  return (
    <Fragment>
      <Comment content={content}/>
    </Fragment>    
  );
}
