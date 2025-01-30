const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
require('./config/database');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret-key',
        resave: false,
            saveUninitialized: true
            }));

            app.use(authRoutes);

            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
                });
                