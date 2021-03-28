import express from 'express';
import http from 'http';
import https from 'https';

class RestHandler {

	/**
	 * @param {string} publickey
	 */
	constructor(publickey) {
		const app = express();

		Object.defineProperty(this, 'http');
		Object.defineProperty(this, 'https');
	}

	/**
	 *
	 * @param {number?} port
	 * @returns {Promise<void>}
	 */
	listenHttp(port = 5010) {
		return new Promise((resolve, reject) => {
			if (this.http) reject();
			const server = http.createServer(this.app);
			server.listen(port,
				() => {
					console.log(`HTTP server running on port ${port}`);
					Object.defineProperty(this, 'http', { value: server });
					resolve();
				});
		});
	}

	/**
	 *
	 * @param {https.ServerOptions} options
	 * @param {number?} port
	 * @returns {Promise<void>}
	 */
	listenHttps(options, port = 5011) {
		return new Promise((resolve, reject) => {
			if (this.https) reject();
			const server = https.createServer(options, this.app);
			server.listen(port,
				() => {
					console.log(`HTTPS server running on port ${port}`);
					Object.defineProperty(this, 'https', { value: server });
					resolve();
				});
		});
	}

	closeHttp() {
		
	}
}