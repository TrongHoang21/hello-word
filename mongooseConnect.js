//Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
var url = "mongodb+srv://hoang:hoang123@cluster0.jj8rd.mongodb.net/db_web_hoang?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams);
/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
// -> NEW COLLECTION
var User = mongoose.model('User', {name: String, roles: Array, age: Number});

/**
 * Lets Use our Models
 * */

//Lets create a new user -> NEW DOCUMENT
var user1 = new User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});

//Some modifications in user object
user1.name = user1.name.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
console.log(user1);

//Lets save it
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

mongoose.disconnect();