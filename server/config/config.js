var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env]; //when you want to use a variable to acccess a property, use bracket notation

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
