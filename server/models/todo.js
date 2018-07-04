
var mongoose = require('mongoose');
//Creation model

var Todo = mongoose.model('Todo',{

    text :{
        //validations
        type : String,
        required : true,
        minLength :1,
        trim : true //removes whitespaces

    },
    completed :{
        type : Boolean,
        default : false // value is set to default if its not inserted
    },
    completedAt :{
        type : Number,
        default : null
    }

});

module.exports ={Todo};
/*
var newTodo = new Todo({

    text : "cooking dinner"

});

newTodo.save().then((doc)=>{

    console.log("Saved Todo :",doc);
},(e)=>{
    console.log("Unable to save Todo.");
});  //saving the data in db Todo

*/