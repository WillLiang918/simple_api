const rp = require('request-promise');
const urlBuilder = require('./utils/urlBuilder');

module.exports = class SimpleApi {

  constructor(headers = {}, default_host = null) {
    this.default_host = default_host;
    this.headers = headers;
  }

  updateHeader(header, value) {
    this.headers[header] = value;
  }

  get(path, params = {}) {
    return this._query('GET', path, null, params);
  }

  post(path, body = {}) {
    return this._query('POST', path, body, {});
  }

  // Private Methods

  _query(method, path, body = null, params = {}) {

    var requestOptions = {
      method: method,
      url: urlBuilder(path, params),
      headers: this.headers,
      body: body,
      json: true,
    };

    return rp(requestOptions);
  }
}
