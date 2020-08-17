const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isAuthorized} = require('../config/auth');
const { request } = require("@octokit/request");


//get all users
router.get('/',  (req,res) => {
    res.render('users');
})


//follow an user
router.post('/follow/:username', isAuthorized, async (req,res) => {
  
  const username = req.params.username;
  await request('PUT /user/following/'+username, {
    headers :{
      Authorization : `token ${token}`
    } 
  })
    req.flash('success',`You Followed ${username}`);
    res.redirect('/');
})





module.exports = router;    