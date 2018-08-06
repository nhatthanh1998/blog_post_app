const passport = require('passport')
module.exports = app =>{
    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile']
    }))

    app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
      res.redirect('/dashboard')
    })

    app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/dashboard');
})

app.get('/api/current_user',(req,res)=>{
  res.send(req.user)
})
}