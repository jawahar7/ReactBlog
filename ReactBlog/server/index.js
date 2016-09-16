import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev'

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret:"this is the secret", resave: true, saveUninitialized: true, cookie: { maxAge: 15*60*1000 }}));
app.use(passport.initialize());
app.use(passport.session());
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));

require('./config/passport')(passport);
require('./route/route')(app, passport);

mongoose.connect('mongodb://localhost:27017/reactblog', function(err){
	if(err)
		console.log(err);
	else
		console.log('connect..');
});

app.listen(3000, (err) => {
	if(err)
		console.log(err);
	else
		console.log('Running on 3000');
});
