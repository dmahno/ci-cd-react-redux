import React, { Component } from "react";
import "./Header.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { withRouter, Link } from "react-router-dom";
import { EventEmitter } from "../../helper-methods";
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: [
        {
          titleName: ["School CI server", "philip1967/my-awesome-repo"],
          buttonName: ["Settings", "Run build", "Rebuild"],
          buttonIcon: ["settings", "play", "rebuild"],
          display: true
        }
      ]
    };
    // Prod
    console.warn = () => {};
  }

  componentDidMount() {}

  _triggerBuild = () => {
    EventEmitter.dispatch("onBuildModalOpen");
  };

  _triggerRebuild = () => {
    EventEmitter.dispatch("onReBuildRequest");
  };

  _getRepositoryName = () => {
    const { settingsData } = this.props;
    return settingsData.repoName || "";
  } 

  render() {
    let historyPageHeader = null;
    let titleColorModifier = null;
    let location = window.location.pathname;
    const { header } = this.state;
    if (location === "/history" || location === "/details") {
      historyPageHeader = this._getRepositoryName();
      titleColorModifier = "color-text";
    } else {
      historyPageHeader = header[0].titleName[0];
      titleColorModifier = "color-text-thirdly";
    }
    return (
      <header className="header">
        <div className="header__content">
          <Title titleName={historyPageHeader} modifier={titleColorModifier} />
          <div className="header__buttons-area">
            {location === "/" ? (
              <Link to="/settings">
                <Button
                  icon={header[0].buttonIcon[0]}
                  classNameElement="button_size_xs"
                  classNameModifier="button_view button-size-small"
                  name={header[0].buttonName[0]}
                  onClick={() => {}}
                />
              </Link>
            ) : location === "/history" ? (
              <Button
                icon={header[0].buttonIcon[1]}
                classNameElement="button_size_xs"
                classNameModifier="button_view button-size-small"
                name={header[0].buttonName[1]}
                onClick={this._triggerBuild}
              />
            ) : location === "/details" ? (
              <Button
                icon={header[0].buttonIcon[2]}
                classNameElement="button_size_xs"
                classNameModifier="button_view button-size-small"
                name={header[0].buttonName[1]}
                onClick={this._triggerRebuild}
              />
            ) : null}
            {location === "/details" || location === "/history" ? (
              <Link to="/settings">
                <Button
                  icon={header[0].buttonIcon[0]}
                  classNameElement="button_size_xs"
                  classNameModifier="button_view button_size_small margin_left_8"
                  onClick={() => {}}
                />
              </Link>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    settingsData: state.settingsData
  };
};

export default connect(mapStateToProps, null)(Header);