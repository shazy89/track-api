const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
      // to be able to use  ( << this >> )  to we must use function(), if we use ( => )function we cannot use inside the arrow func  ( << this >> ) 
  userSchema.pre('save', function(next) {
     const user = this;
     if(!user.isDirectModified('password')){
         return next()
     }
     bcrypt.genSalt(10, (err, salt) => {
       if (err) next(err);
       bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) next(err); 
        user.password = hash;
        next();
       }); 
     });
  });

  userSchema.methods.comparePassword = function(candidatePassword) {
      const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) reject(err); 
            if (!isMatch) reject(false);
            resolve(true);
        });
    });
  }

 mongoose.model('User', userSchema);

      
