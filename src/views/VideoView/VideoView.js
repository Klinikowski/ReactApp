import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const VideoView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.video} />
    )}
  </AppContext.Consumer>
);

export default VideoView;