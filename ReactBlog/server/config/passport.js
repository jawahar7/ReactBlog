import { Strategy } from 'passport-local';
import users from '../model/users.js';

module.exports = function(passport){
	passport.use(new Strategy(function(username, password, done){				
		users.findOne({username: username}, function(err, user){				
			if(err)
				return(err)
			if(!user)
				return done(null, false);
			else				
				return done(null, user);			
		});
	}));
	
	passport.serializeUser(function(user, done){		
		done(null, user);
	});

	passport.deserializeUser(function(user, done){			
		users.findById(user._id, function(err, user) {
            done(err, user);
        });
	});
};