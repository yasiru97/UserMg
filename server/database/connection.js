const mongoose = require('mongoose');

let mongoUriK8 =`mongodb://${process.env.MONGO_URI}/usermg`
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(mongoUriK8, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB