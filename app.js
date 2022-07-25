const { app } = require('./routes/routes.js')
const  config  = require('../config')

const PORT = config.PORT

app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT}`)
});


