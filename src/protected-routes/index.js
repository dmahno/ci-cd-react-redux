import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from '../redux/store';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { settingsData } = store.getState();
	let isValidSettingsAvailable = false;
	if (settingsData && settingsData.id && settingsData.id.length) {
		isValidSettingsAvailable = true;
	}
  return (
    <Route
      {...rest}
      render={props =>
        isValidSettingsAvailable ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: rest.redirectRoute, extras: {...rest.location}}} />
        )
      }
    />
  );
};

export default ProtectedRoute;