//Connectivity

const mongoose = require('mongoose');

var url='mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

//Creation model
/*
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
*/

var Users= mongoose.model('Users',{

    email:{

        type : String,
        required : true,
        minLength :1,
        trim : true
    }


});

var User1 = new Users({

    email : "margaret.mj4@gmail.com "
});
User1.save().then((doc)=>{

    console.log(JSON.stringify(doc,undefined,2));

},(e)=>{

    console.log("Unable to save user.");

});
/*
var newTodo = new Todo({

    text : "cooking dinner"

});

newTodo.save().then((doc)=>{

    console.log("Saved Todo :",doc);
},(e)=>{
    console.log("Unable to save Todo.");
});  //saving the data in db Todo


var objTodo = Todo({

    text : "jogging ",
    completed : true,
    completedAt : 20
});

objTodo.save().then((doc)=>{

    console.log(JSON.stringify(doc, undefined, 2));

},(e)=>{

    console.log("Unable to save Todo.");

});
*/