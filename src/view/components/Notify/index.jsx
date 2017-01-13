import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import tree from '../../tree';

const style = {
  Containers: {
    DefaultStyle: {
      width: '',
    },
  },
  Dismiss: {
    DefaultStyle: {
      display: 'none',
    },
  },
};

export default class Notify extends Component {
  constructor() {
    super();
    this._ref = null;
    this.notify = this.notify.bind(this);
  }

  componentDidMount() {
    tree.on('saved', this.notify);
  }

  componentWillUnmount() {
    tree.off('saved', this.notify);
  }

  notify() {
    if (!this._ref) return;
    this._ref.addNotification({
      title: 'saved',
      level: 'success',
      autoDismiss: 1,
    });
  }

  render() {
    return (
      <NotificationSystem
        ref={ref => { this._ref = ref; }}
        style={style}
      />
    );
  }
}
