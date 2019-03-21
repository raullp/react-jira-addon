import React from 'react';
import Avatar from '@atlaskit/avatar';
import Comment, {
  CommentAuthor,
  CommentTime,
  CommentAction,
  CommentEdited,
} from '@atlaskit/comment';
import avatarImg from '../../img/ninja-avatar.png';

export default () => (
  <div>
    <Comment
      avatar={<Avatar src={avatarImg} label="Atlaskit avatar" size="medium" />}
      author={<CommentAuthor>John Smith</CommentAuthor>}
      type="author"
      edited={<CommentEdited>Edited</CommentEdited>}
      restrictedTo="Restricted to Admins Only"
      time={<CommentTime>30 March, 2018</CommentTime>}
      content={
        <p>
          Content goes here. This can include <a href="/link">links</a> and
          other content.
        </p>
      }
      actions={[
        <CommentAction>Reply</CommentAction>,
        <CommentAction>Edit</CommentAction>,
        <CommentAction>Like</CommentAction>,
      ]}
    />
  </div>
);
