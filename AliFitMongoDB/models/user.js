const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true},
    age: { type: Number, trim: true, },
    email: {type: String, trim: true, unique:true, required: true},
    phoneCode: {type: String, trim: true,required: true},
    phoneNumber: { type: Number, trim: true,required: true},
    shortGoal: { type: String, trim: true  },
    longGoal: { type: String, trim: true  },
    startWeight: { type: Number, trim: true },
    startHeight: { type: Number, trim: true },
    requestDate: { type: Date, default: Date.now }

});
// Change 'client' to the collection you want to post the data into inside the DB.
module.exports = mongoose.model("client", userSchema)

// The "user" mentioned in the above line should be in
// lowercase singular form ..whereas the actual collection
// name in mongodb will be in the plural form.
// Refer to mongoose documentation for more:https://www.npmjs.com/package/mongoose
// The first argument is the singular name of your collection.
// Mongoose automatically looks for the lowercase plural version.For example, if you use
// const MyModel = mongoose.model('Ticket', mySchema);
// Then MyModel will use the tickets collection, not the Ticket collection. 