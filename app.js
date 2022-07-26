const { app } = require('./routes/routes.js')
const  config  = require('./config')
const cors=require("cors");

const PORT = config.PORT

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT}`)
});


