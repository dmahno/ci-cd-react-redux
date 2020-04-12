import React, { Component } from "react";
import Card from "../../components/Card/Card";
import CARD_DATA from "../../components/Card/CardData";
import Button from "../../components/Button/Button";
import { EventEmitter } from "../../helper-methods";
import { fetchBuildLogsFromServer } from "../../redux/actions/build-data";
import { connect } from "react-redux";

class History extends Component {
  constructor() {
    super();
    this.state = {
      cards: CARD_DATA,
      builds: []
    };
  }

  componentDidMount() {
    this._subscribeToEvents();
    this._loadBuilds();
  }

  /**
   * To load build history from server
   */
  _loadBuilds = async () => {
    await this.props.fetchBuildLogsFromServer();
    const { buildData } = this.props;
    if (buildData.builds && buildData.builds.length) {
      this.setState({
        builds: this._formatBuildsToGenerateCards(buildData.builds)
      });
    }
  };

  /**
   * To generate cards parameters from server data
   */
  _formatBuildsToGenerateCards = builds => {
    return builds.map(build => {
      return {
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
    });
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

  /**
   * To subscribe to required events
   */
  _subscribeToEvents = () => {
    // Listen to build refresh event
    EventEmitter.subscribe("onBuildHistoryRefresh", () => {
      this._loadBuilds();
    });
  };

  render() {
    const { builds } = this.state;
    if (builds.length) {
      return (
        <>
          {builds.map(({ titleNumber, ...otherCollectionProps }) => (
            <Card
              key={titleNumber}
              titleNumber={titleNumber}
              {...otherCollectionProps}
            />
          ))}
          {/* <Button
            classNameElement="button_size_xs"
            name="Show more"
            classNameModifier="button_view"
          /> */}
        </>
      );
    } else {
      return (
        <div>
          <h5>No Build Logs Available</h5>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    buildData: state.buildData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBuildLogsFromServer: () => dispatch(fetchBuildLogsFromServer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
