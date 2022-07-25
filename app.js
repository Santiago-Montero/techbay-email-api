const { app } = require('./routes/routes.js')


const PORT = 8008
app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT}`)
});

