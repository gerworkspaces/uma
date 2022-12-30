const router = require('express').Router();
// const User = require('../models/user.model');
// const { body, validationResult } = require('express-validator');
// const passport = require('passport')

router.get('/login', async (req, res, next) => {
  res.render('login');
});

router.post('/login', async (req, res, next) => {
    /* successRedirect: "/user/profile",
    failureRedirect: "/auth/login",
    failureFlash: true */
    res.send('login post')
})

router.get('/register', async (req, res, next) => {
    /* req.flash('error', "some error")
    req.flash('error', "some error 2")
    req.flash('info', 'soe value')
    req.flash('warning', 'soe value')
    req.flash('success', 'soe value')
    const messages = req.flash() */

  // const messages2 = req.flash()
  res.render('register');
});

router.get('./register', async(req, res, next) => {
  res.send('')
})

/* router.post(
  '/register',
  [
    body('email')
      .trim()
      .isEmail()
      .withMessage('Email must be a valid email')
      .normalizeEmail()
      .toLowerCase(),
    body('password')
      .trim()
      .isLength(2)
      .withMessage('Password length short, min 2 char required'),
    body('password2').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password do not match')
        }
        return true
    })
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        errors.array().forEach(error => {
            req.flash('error', error.msg)
        })
        res.render('/register', { 
            email: req.body.email,
            message: req.flash() })
        return;
        // console.log(errors)
        // return
      }
      
      const { email } = req.body;
      const doesExist = await User.findOne({ email });
      if (doesExist) {
        res.redirect('/auth/register');
        return;
      }

      const user = new User(req.body);
      await user.save();
      res.send(user);
      // res.send(req.body)
      // res.send('register post')
    }
    catch (error) {
      next(error);
    }
  }
); */

router.get('/logout', async (req, res, next) => {
    req.send('logout')
});

module.exports = router;
