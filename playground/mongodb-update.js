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

  
    /*
    db.collection('Todos').updateOne({

        "text" : "Something to do"
    },
        {
            $set: 
            {
                "completed" : "false"
            }
        }
    ).then((result)=>{
        console.log(result);
    });
    */
   db.collection('Users').updateOne(
       {
           name: "Margaret"
       },
       {
           $inc :{
               age : -2
           }
       }
    );
    //client.close();

});