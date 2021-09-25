// Import the needed libraries.
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { validationResult } = require('express-validator');

// Import the models
const Users = require('../models/user');

// GET /login
// The function delievers the login view.
exports.getLogin = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('login.html', {
        path: '/login',
        title: 'Login',
        errorMessage: message,
        email: ''
    });
};

// POST /login
// The function logins in a user.
exports.postLogin = (req, res, next) => {
    // Get the data from the form.
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);

    // Validate the input.
    if (email == '' || password == '' || !errors.isEmpty()) {
        return res.status(422).render('login.html', {
            path: '/login',
            title: 'Login',
            errorMessage: 'There was an error during login',
            email: email 
        });
    };

    // If it passes, check to see if the login passes.
    Users.findOne({username: email})
        .then(user => {
            if (!user) {
                return res.status(422).render('login.html', {
                    path: '/login',
                    title: 'Login',
                    errorMessage: 'Invalid email or password.',
                    email: email
                });
            }
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            res.redirect('/admin');
                        });
                    }
                    return res.status(422).render('login.html', {
                        path: '/login',
                        title: 'Login',
                        errorMessage: 'Invalid email or password.',
                        email: email
                      });
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/login');
                });
        })
        .catch(err => {
            // If there was an error, redirect to 500 page.
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};

// POST /logout
// The function logouts the user.
exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/');
    });
};