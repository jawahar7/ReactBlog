import usercontroller from '../controller/user-controller';
import path from 'path';
var rootpath = path.join(__dirname, '../');

module.exports = function(app, passport) {
	app.get('/*', (req, res) => {
		res.sendFile(path.join(rootpath, './index.html'));
	});

	app.post('/api/userregister', usercontroller.save);
	app.post('/api/login', passport.authenticate("local"), usercontroller.login);
	app.get('/api/loggedin', usercontroller.isauth);
	app.get('/api/logout', usercontroller.logout);
};