const mongoose = require('mongoose');

const dbConnection = async()=>{

    try {
        await mongoose.connect(db)
    }catch(err){

    }

}