// Karma configuration
// Generated on Mon Jun 16 2014 16:20:04 GMT-0500 (Hora de verano central (México))
module.exports = function(config) {
  config.set({
    basePath: 'src',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'js/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 6000,
    singleRun: true
  });
};