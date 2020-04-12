import { axiosHelper, EventEmitter } from "../helper-methods";

export const getSettings = () => {
	return new Promise(async (resolve, reject) => {
		try {
			EventEmitter.dispatch("onLoaderActivate");
			const response = await axiosHelper().get("/settings");
			resolve(response);
			EventEmitter.dispatch("onLoaderDeactivate");
		} catch (error) {
			reject(error);
			EventEmitter.dispatch("onLoaderDeactivate");
		}
	});
}

export const updateSettings = (settings) => {
	return new Promise(async (resolve, reject) => {
		try {
			EventEmitter.dispatch("onLoaderActivate");
			const response = await axiosHelper().post("/settings", settings);
			resolve(response);
			EventEmitter.dispatch("onLoaderDeactivate");
		} catch (error) {
			reject(error);
			EventEmitter.dispatch("onLoaderDeactivate");
		}
	});
}

export const addToBuildQueue = commitHash => {
	return new Promise(async (resolve, reject) => {
		try {
			EventEmitter.dispatch("onLoaderActivate");
			const response = await axiosHelper().post(`/builds/${commitHash}`);
			resolve(response);
			EventEmitter.dispatch("onLoaderDeactivate");
		} catch (error) {
			reject(error);
			EventEmitter.dispatch("onLoaderDeactivate");
		}
	});
}

export const fetchBuilds = () => {
	return new Promise(async (resolve, reject) => {
		try {
			EventEmitter.dispatch("onLoaderActivate");
			const response = await axiosHelper().get(`/builds`);
			resolve(response);
			EventEmitter.dispatch("onLoaderDeactivate");
		} catch (error) {
			reject(error);
			EventEmitter.dispatch("onLoaderDeactivate");
		}
	});
}