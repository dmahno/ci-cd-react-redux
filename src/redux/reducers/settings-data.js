import { UPDATE_SETTINGS, CLEAR_SETTINGS } from "../action-types";

const initialState = {
  repository: "",
  command: "",
  branch: "",
  minutes: "10"
};

export const settingsDataReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case UPDATE_SETTINGS: {
      newState = action.payload;
      break;
    }
    case CLEAR_SETTINGS: {
      newState = initialState;
      break;
    }
    default: {
    }
  }
  return newState;
};
