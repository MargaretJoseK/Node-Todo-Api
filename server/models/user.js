
var mongoose = require('mongoose');
var Users= mongoose.model('Users',{

    email:{

        type : String,
        required : true,
        minLength :1,
        trim : true
    }


});

module.exports = {Users};
/*
var User1 = new Users({

    email : "margaret.mj4@gmail.com "
});
User1.save().then((doc)=>{

    console.log(JSON.stringify(doc,undefined,2));

},(e)=>{

    console.log("Unable to save user.");

});
*/
