import { CLEAR_SETTINGS, FETCH_SETTINGS } from "../action-types";

export const fetchSettingsFromServer = () => {
    return {
        type: FETCH_SETTINGS
    }
}

export const clearSettingsData = () => {
    return {
        type: CLEAR_SETTINGS
    }
}