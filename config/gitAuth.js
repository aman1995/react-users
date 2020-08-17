const passport = require('passport');
const {gitHub} = require('./passport');
const GitHubStrategy = require('passport-github').Strategy;

global.token ="";


//Git Auth
module.exports = passport.use(new GitHubStrategy({
    authorizationURL: gitHub.authorizationURL,
    clientID: gitHub.clientID,
    tokenURL: gitHub.tokenURL,
    clientSecret: gitHub.clientSecret,
    callbackURL: gitHub.callbackURLs
  },
  function(accessToken, refreshToken, profile, cb) {
      token = accessToken;
      return cb(null, profile);
    }));

