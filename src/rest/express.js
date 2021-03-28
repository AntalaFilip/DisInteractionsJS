import express from 'express';
import http from 'http';
import https from 'https';

class ExpressHandler {

	/**
	 * @param {'http' | 'https'} mode
	 */
	constructor(mode) {
		this.app = express();
		this.http = false;
		this.https = false;
	}

	listenHttp() {

	}

	/**
	 * 
	 * @param {https.ServerOptions} options 
	 * @param {number?} port
	 */
	listenHttps(options, port = 5010) {
		if (this.https) // throw error
		return new Promise(resolve => {
			https.createServer(options, this.app).listen(port, 
				() => {
					console.log(`HTTPS server running on port ${port}`);
					this.https = true;
					resolve();
				});
		});
	}
}