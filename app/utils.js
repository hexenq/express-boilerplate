import { getEnv } from '../config';
import errors from './errors';

var env = getEnv();

Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"h+": this.getHours(), // hour
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds() // millisecond
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};

const utils = {
	errorRes: (code, msg, verbose) => {
		var response;
		if (typeof code === "object") {
			if (code.hasOwnProperty("error_code") && code.hasOwnProperty("error_msg")) {
				verbose = msg || "";
				if (env == 'production') {
					response = {
						error_code: code.error_code,
						error: code.error_msg || ''
					};
				} else {
					response = {
						error_code: code.error_code,
						error: code.error_msg || '',
						verbose: verbose || ''
					};
				}
			} else {
				response = {
					error_code: errors.error.error_code,
					error: code || ''
				};
			}
		} else if (typeof code === "string") {
			verbose = msg || "";
			if (env == 'production') {
				response = {
					error_code: errors.error.error_code,
					error: code || ''
				};
			} else {
				response = {
					error_code: errors.error.error_code,
					error: code || '',
					verbose: verbose || ''
				};
			}
		} else {
			if (env == 'production') {
				response = {
					error_code: code,
					error: msg || ''
				};
			} else {
				response = {
					error_code: code,
					error: msg || '',
					verbose: verbose || ''
				};
			}
		}
		return response;
	}
}

export default utils;


