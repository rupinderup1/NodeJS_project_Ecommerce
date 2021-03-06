var createToken = function(auth){
    return jwt.sign(
        {
            id:auth.id,
        },
        'my-secret'
    )
};

module.exports = {
    generateToken = function(req,res){
        req.token = createToken(req.auth);
        return next();
    },
    sendToken = function(req,res){
        res.setHeader('x-access-token',req,token);
        return res.status(200).send(JSON.stringify(req.user));
    }
}