import { FETCH_SETTINGS, UPDATE_SETTINGS } from "../action-types";
import { getSettings } from "../../http-calls";
import { mergeMap, filter } from "rxjs/operators";

export const fetchSettingsFromServerEpic = action$ =>
  action$.pipe(
    filter(action => action.type === FETCH_SETTINGS),
    mergeMap(async action => {
      const updatedSettings = await getSettings();
      return Object.assign({}, action, {
        type: UPDATE_SETTINGS,
        payload: {
          ...updatedSettings.data.data.data,
          fetchedOn: new Date() + ""
        }
      });
    })
  );
