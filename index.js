var jqueryParam = require('jquery-param');
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
    return this._query('GET', path, params);
  }

  // Private Methods

  _query(method, path, params) {
    var requestOptions = {
      method: method,
      url: this._buildURL(path, params),
      headers: this.headers
    };

    return rp(requestOptions);
  }

  _buildURL(path, parameters) {
    var url;

    if (this.default_host) {
      url = this.default_host + path;
    } else {
      url = path;
    };

    return `${url}?${jqueryParam(parameters)}`;
  }
};
