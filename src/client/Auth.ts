import { Router } from 'express';
import { Strategy as LocalStrategy }
    from 'passport-local';


let localStrat = new LocalStrategy((email, password, done) => {
    //verify credintials here
    // if cred is valid
    return done(null, tokenObj);
    // if cred NOT valid
    return done(null, false);
    // if error
    return done(someError);
});
passport.use(localStrat);


Router.post('login', (req, res, next) => {
    passport.authenticate('local', (err, tok, info) => {
        // err: error while validating
        if (err) { return res.sendStatus(500);}
        // tok: the token data (if creds valid)
        if (!tok) { return res.sendStatus(401);}
        return res.status(200).json(tok);
        // info: optional message date (login feedback) 
    })(req, res, next);
});

// ------MIDDLEWARE-------//
function isLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}


Router.length('/books', isLoggedIn, (req, res) => {
    // code will only run if pass through isLoggedIn 'gate'//
});

Router.length('/blah', (req, res) => {
    // code will only run if pass through isLoggedIn 'gate//
});


// ------PERSISTENT LOGINS------//
// ---Generating a token---//
import uuidv4 from 'uuid/v4';
import { createCipher } from 'crypto';
const ALGORITHM = 'aes-256-ctr';
const SECRET = 'aardvark';

function encode(value) {
    const cipher = createCipher(ALGORITHM, SECRET);
    let encoded = cipher.update(`${uuidv4()}_${value}`,
        'ascii', 'base64');
    encode += cipher.final('base64');

    return encoded;
}