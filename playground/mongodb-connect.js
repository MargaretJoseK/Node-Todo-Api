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

   /* const db=client.db("TodoApp");
    db.collection('Todos').insertOne({

        text: "Something to do",
        completed: "false"
    },(err,result)=>{

        if(err)
        {
            return console.log("Unable to insert the document.",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });*/

    
    db.collection('Users').insertOne({

        name : "Margaret",
        age :25,
        location:"Nasik"
    },(err,result)=>{

        if(err)
        {
            return console.log("Unable to insert document",err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    

    });

    client.close();

});