const { app } = require('./routes/routes.js')
const  config  = require('./config')
const cors=require("cors");

const PORT = config.PORT

app.use(cors())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT}`)
});


