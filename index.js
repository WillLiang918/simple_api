var rp = require('request-promise');

module.exports = class SimpleApi {
  constructor(headers, default_host = null) {
    this.default_host = default_host;
    this.headers = headers;
  }

  updateHeader(header, value) {
    this.headers[header] = value;
  }

  get(path, params = {}) {
    var url;

    if (this.default_host) {
      url = this.default_host + path;
    } else {
      url = path;
    }

    return this.query('GET', url, params);
  }

  query(method, url, params) {
    var requestOptions = {
      method: method,
      url: url,
      headers: this.headers
    };

    return rp(requestOptions);
  }
}
