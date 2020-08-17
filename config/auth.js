
module.exports.isAuthorized = function (req,res,next){
    if(req.isAuthenticated()){
        console.log('Authenticated');
        next();
    }
    else{
        console.log('Authentication Failed');
        res.redirect("/auth/github");
    }
}