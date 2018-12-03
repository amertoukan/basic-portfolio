const express = require ('express');
const bodyParser = require ('body-parser')

const app = express();

const PORT = process.env.PORT || 8800;

//body parser 
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))
//ROUTING FILES
//require('./routes/apiRoutes')(app);
require("./routes/htmlRoutes")(app);

//SERVER LISTENING
app.listen(PORT, () => {
    console.log ("http:/localhost:"+PORT+"/");
})