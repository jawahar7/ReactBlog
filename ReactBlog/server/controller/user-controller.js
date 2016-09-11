import bcrypt from 'bcryptjs';
import users from '../model/users.js';
var usercontroller = {};
const saltRounds = 10;

usercontroller.save = function(req, res) {	
	/*bcrypt.genSalt(saltRounds, function(err, salt) {
    	bcrypt.hash(req.body.password, salt, function(err, hash) {	
			if(err)
				res.send(err);
			else{				
				var user = new users({username: req.body.username, password: hash, email: req.body.email});			
				user.save(function(err, data){
					if(err)
						res.json({result: 'failed', error:err});
					else
						res.json({result: 'success'});
				});
			}
		});
	});*/
	res.json({result: 'Insert Successfully'});
	//res.status(400).json({ error: 'something is wrong' });
};

usercontroller.login = function(req, res){		
	users.findOne({username: req.body.username}).select('+password').exec(function(err, user){
		if(err)			
			res.send("Error");		
		else{			
			if(user){				
				bcrypt.compare(req.body.password, user.password, function(err, result) {
					if(result)
						res.send('success');
					else
						res.send('Invalid Credential');
				});
			}
			else
				res.send('Invalid Credential');
		}
	});		
};

usercontroller.isauth = function(req, res){	
	res.send(req.isAuthenticated() ? req.user : '0');
};

usercontroller.logout = function(req, res){	
	req.session.destroy();
	res.send('logout');
};

module.exports = usercontroller;