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

    db.collection('Todos').find({completed:"true"}).toArray().then((docs)=>{

        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{
        console.log("unable to fetch document");
    });

   
    //client.close();

});