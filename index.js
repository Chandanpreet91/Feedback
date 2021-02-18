const express = require('express');
const mongoose = require('mongoose');
const coookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
const app = express();
app.use(
    coookieSession({
        maxAge: 30*24*60*60*1000, //30days
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening at port 5000`)
});

