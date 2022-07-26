const { app } = require('./routes/routes.js')
const  config  = require('./config')
const cors=require("cors");

const PORT = config.PORT

//app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080/');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT}`)
});


