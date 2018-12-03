const path = require ('path');

module.exports = (app) => {
    //HTML GET requests

    //index.html
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    //portfolio.html
    app.get("/portfolio", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/portfolio.html"))
    });

    app.get("/contact", (req,res)=>{
        res.sendFile(path.join(__dirname,"../public/contact.html"))
    });

  
};