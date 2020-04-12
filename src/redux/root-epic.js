import { combineEpics } from 'redux-observable';
import { fetchSettingsFromServerEpic } from './epics/settings-data-epics';

export const rootEpic = combineEpics(
  fetchSettingsFromServerEpic
);