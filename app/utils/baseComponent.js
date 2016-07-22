import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class BaseComponent extends React.Component {
  shouldPureComponentUpdate = shouldPureComponentUpdate;
}
