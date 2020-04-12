import React, { Component } from "react";
import Card from "../../components/Card/Card";
import CARD_DATA from "../../components/Card/CardData";
import BuildLogArea from "../../components/BuildLogArea/BuildLogArea";
import { connect } from "react-redux";

class Details extends Component {
  state = {
    card: null
  };

  componentDidMount() {
    this._extractBuildDataFromRoute();
  }

  _extractBuildDataFromRoute = () => {
    console.log("window.location :", window.location);
    const { search = "" } = window.location;
    const buildId =
      search.split("?buildId=").length === 2
        ? search.split("?buildId=")[1]
        : null;
    if (buildId) {
      const build = this.props.buildData.builds.find(b => b.id === buildId);
      if (build) {
        const card = {
          cardStatus: this._generateStatus(build.status),
          colorNumber: this._generateStatusColor(build.status),
          titleNumber: build.buildNumber,
          cardTitle: build.commitMessage,
          brunchName: build.branchName,
          buildId: build.id,
          commitNumber: this._shortenCommitHash(build.commitHash),
          userName: build.authorName,
          date: "21 янв, 03:06",
          time: "1 ч 20 мин"
        };
        this.setState({ card });
        return;
      }
    }
    this.props.history.replace("/history");
  };

  /**
   * To generate status from server data
   */
  _generateStatus = providedStatus => {
    switch (providedStatus) {
      case "Waiting": {
        return "clock";
      }
      // Add more cases here
      // ...
      default: {
        return "done";
      }
    }
  };

  /**
   * To generate status color from server data
   */
  _generateStatusColor = providedStatus => {
    switch (providedStatus) {
      case "Waiting": {
        return "pending";
      }
      // Add more cases here
      // ...
      default: {
        return "success";
      }
    }
  };

  /**
   * To generate
   */
  _shortenCommitHash = commitHash => {
    return commitHash.slice(0, 6);
  };

  render() {
    const { card } = this.state;
    if (card) {
      return (
        <>
          <Card {...card} />
          <BuildLogArea />
        </>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    buildData: state.buildData
  };
};

export default connect(mapStateToProps, null)(Details);
