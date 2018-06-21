// connectivity 

const MongoClient= require('mongodb').MongoClient;
var url='mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,client)=>{

    if(err)
    {
         return console.log("Unable to Connect to Server");
    }
    console.log("Connected.");
    const db=client.db("TodoApp");

    //delete many
   /*
    db.collection('Todos').deleteMany({text :'Eat Lunch'}).then((result)=>{

        console.log(result);

    });
    
    */

    //deleteOne()

   /* 
   db.collection('Todos').deleteOne({text: 'to jog'}).then((result)=>{

        console.log(result);
    });
    */

    //findOneAndDelete()

    db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result)=>{

        console.log(result);
    });



    //client.close();

});