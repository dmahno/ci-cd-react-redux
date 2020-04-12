import React from 'react';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import image from '../../assets/icons/icon-main-page.svg';
import { connect } from 'react-redux';
import { fetchBuildLogsFromServer } from '../../redux/actions/build-data';

const Main = props => {
  // Onload, check if settings are available
  const { settingsData } = props;
  if (settingsData.id && settingsData.id.length) {
    props.history.replace("/history");
  }
  return (
    <div className='content flex_center'>
      <InfoBlock
        image={image}
        text='Configure repository connection and synchronization settings'
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    settingsData: state.settingsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBuildLogsFromServer: () => dispatch(fetchBuildLogsFromServer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);