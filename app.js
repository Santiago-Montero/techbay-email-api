const { app } = require('./routes/routes.js')



const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT}`)
});


