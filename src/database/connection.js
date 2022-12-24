const mongoose=require('mongoose');
const env=require('dotenv')
env.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("connected to database")})
.catch((e)=>{console.log(e)})



