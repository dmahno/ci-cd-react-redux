import { UPDATE_SETTINGS, CLEAR_SETTINGS, UPDATE_BUILD_HISTORY, CLEAR_BUILD_HISTORY } from "../action-types";

const initialState = {
  builds: []
};

export const buildDataReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case UPDATE_BUILD_HISTORY: {
      newState.builds = action.payload.logs;
      break;
    }
    case CLEAR_BUILD_HISTORY: {
      newState = initialState;
      break;
    }
    default: {
    }
  }
  return newState;
};
