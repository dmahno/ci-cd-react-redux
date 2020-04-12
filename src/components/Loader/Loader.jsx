import React, { Component } from "react";
import "./Loader.scss";
import { EventEmitter } from "../../helper-methods";

class Loader extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    // On mount, subscribe to loader events
    EventEmitter.subscribe("onLoaderActivate", this._showLoader);
    EventEmitter.subscribe("onLoaderDeactivate", this._hideLoader);
  }

  _showLoader = () => {
    this.setState({ isVisible: true });
  };

  _hideLoader = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { isVisible } = this.state;
    if (isVisible) {
      return (
        <div id="loader__outer__wrapper">
          <div className="loader"></div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Loader;
