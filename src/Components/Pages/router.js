import React from 'react';
import createHistory from 'history/createBrowserHistory';

const Router = ComposedComponent => React.createClass({
  displayName: `Router(${ComposedComponent.displayName || ComposedComponent.name})`,

  propTypes: {
    basename: React.PropTypes.string,
    initialLocationState: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      basename: window.location.pathname.replace(/\/+$/, ''),
      initialLocationState: {},
    };
  },

  getInitialState() {
    return {
      locationState: this.props.initialLocationState,
      history: {},
    };
  },

  componentDidMount() {
    this.setState({
      history: createHistory({ basename: this.props.basename }),
    });
  },

  setLocationState(payload, cb = () => {}) {
    let nextState = {
      ...this.state.locationState,
      ...payload,
    };
    // Reset if it's empty
    if (!payload) {
      nextState = {};
    }

    this.setState({
      locationState: nextState,
    }, cb);
  },

  pushHistory(path, payload) {
    this.pushOrReplaceHistory('push', path, payload);
  },

  replaceHistory(path, payload) {
    this.pushOrReplaceHistory('replace', path, payload);
  },

  pushOrReplaceHistory(method, path, payload) {
    this.state.history[method](path,
      {
        ...this.state.history.location.state,
        ...payload,
      }
    );
  },

  render() {
    return (
      <ComposedComponent
        {...this.props}
        {...this.state}
        history={this.state.history}
        pushHistory={this.pushHistory}
        replaceHistory={this.replaceHistory}
        setLocationState={this.setLocationState}
      />
    );
  },
});

export default Router;