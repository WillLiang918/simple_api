const jqueryParam = require('jquery-param');

module.exports = function(path, parameters) {
  var url;

  if (this.default_host) {
    url = this.default_host + path;
  } else {
    url = path;
  }

  return `${url}?${jqueryParam(parameters)}`;
}
