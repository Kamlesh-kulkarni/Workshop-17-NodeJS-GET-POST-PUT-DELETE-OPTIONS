const mongoose = require("mongoose");

const Db = 
"mongodb+srv://kk:kk123@cluster0.z9lfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectionDatabase = async()=>{
    try {

        const conn = await mongoose.connect(Db, {

            useNewUrlParser: true,
            
            useUnifiedTopology: true,

        })

        console.log(`MongoDB Connected ${conn.connection.host}`);

    } catch (error) {

        console.log(`Error: ${error.message}`)

        process.exit();

    }
}

module.exports = connectionDatabase