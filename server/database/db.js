import  mongoose  from "mongoose"; 

const Connection = async() => {
    try{  
        const URL='mongodb://user:codeforinterview@blogweb-shard-00-00.yzhcp.mongodb.net:27017,blogweb-shard-00-01.yzhcp.mongodb.net:27017,blogweb-shard-00-02.yzhcp.mongodb.net:27017/BLOGWEB?ssl=true&replicaSet=atlas-8br2tz-shard-0&authSource=admin&retryWrites=true&w=majority';      
    await mongoose.connect(URL,{ 
           useNewUrlParser : true ,
           useUnifiedTopology: true,
        //    usefindandmodify : false
     });
    console.log('database connected successfully');
}
catch(error){ 
        console.log('error while connecting to mongodb',error);
    }
}


export default Connection;
       