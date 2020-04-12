import axios from "axios";
import { BASE_URL } from '../configs/index';

/**
 * 
 * @param {*} routerRef : Reference to the history object 
 * @param {*} path : The path to navigate to
 * @param {*} method : Type of navigation (push/replace), default is push if nothing passed
 */
export const navigateToPath = (routerRef, path, method = "push") => {
	if (routerRef) {
		routerRef[method](path)
	}
}

/**
 * To communicate through events
 */
export const EventEmitter = {
	events: {},
	dispatch: function(event, data = null) {
		// Check if the specified event is exist / subscribed by anyone
		if (!this.events[event]) {
			// Doesn't exist, so just return
			return;
		} else {
			// Exists
			// Process all bound callbacks
			this.events[event].forEach(callback => callback(data))
		}
	},
	subscribe: function(event, callback) {
		// Check if the specified event is exist / subscribed by anyone
		if (!this.events[event]) {
			// Not subscribed yet, so make it an array so that further callbacks can be pushed
			this.events[event] = [];
		} 
		// Push the current callback
		this.events[event].push(callback);
	}
}

/**
 * Axios wrapper to make base configurations
 */
export const axiosHelper = () => {
	const axiosInstance = axios.create({
		baseURL: BASE_URL
	})
	return axiosInstance;
}