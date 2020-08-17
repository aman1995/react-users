const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/github',
  passport.authenticate('github', {scope: 'user:follow'}));

router.get('/github/callback', 
  passport.authenticate('github', { successRedirect: '/', failureRedirect: '/auth/github' }));

 module.exports= router; 