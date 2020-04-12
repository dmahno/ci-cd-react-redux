import { CLEAR_BUILD_HISTORY, UPDATE_BUILD_HISTORY } from "../action-types";
import { fetchBuilds } from "../../http-calls";

export const fetchBuildLogsFromServer = () => {
	return async (dispatch, getState) => {
		try {
			const {data} = await fetchBuilds();
			if (data && data.data && data.data.data && data.data.data.length) {
				dispatch(updateBuildLogs(data.data.data))
			}
		} catch (error) {
			// No Data fetched!
		}
	}
}

export const updateBuildLogs = logs => {
    return {
				type: UPDATE_BUILD_HISTORY,
				payload: {
					logs
				}
    }
}

export const clearBuildData = () => {
    return {
        type: CLEAR_BUILD_HISTORY
    }
}