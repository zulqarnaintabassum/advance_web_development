var express = require('express');
var router = express.Router();

/* GET signup page */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Create Account', error: null, success: null });
});

/* POST signup form */
router.post('/', function(req, res, next) {
  var { fullname, email, password, confirmPassword, gender, terms } = req.body;

  // Basic validation
  if (!fullname || !email || !password || !confirmPassword) {
    return res.render('signup', {
      title: 'Create Account',
      error: 'Please fill in all required fields.',
      success: null
    });
  }

  if (password !== confirmPassword) {
    return res.render('signup', {
      title: 'Create Account',
      error: 'Passwords do not match.',
      success: null
    });
  }

  if (password.length < 8) {
    return res.render('signup', {
      title: 'Create Account',
      error: 'Password must be at least 8 characters long.',
      success: null
    });
  }

  if (!terms) {
    return res.render('signup', {
      title: 'Create Account',
      error: 'You must agree to the Terms & Conditions.',
      success: null
    });
  }

  // Success - in real app, save to database here
  res.render('signup', {
    title: 'Create Account',
    error: null,
    success: `Welcome, ${fullname}! Your account has been created successfully.`
  });
});

module.exports = router;
