const Handlebars = require('handlebars');
Handlebars.registerHelper("isOnline", function(value) {
  return value=='online';
});