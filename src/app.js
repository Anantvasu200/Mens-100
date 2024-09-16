const express = require("express");
const app  = express();
require("./db/conn");
const Player = require("./models/mens");
const port = process.env.PORT || 3000;

//Midlleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Routes
app.post("/create", async(req, res)=>{
    try{
        let data = new Player(req.body);
        const result = await data.save();
        res.send(result).status(201);
        console.log(result); 
    }
    catch(e){
        res.send(e).status(400);
    }
})

// Insert Multiple Records / Players
app.post ("/createmany", async(req,res)=>{
    try{
        const data = await Player.insertMany(req.body);
        res.send(data).status(201);
        console.log(data);
    }
    catch(e){
        res.status(400).send(e);
    }

})


// Get All Players
app.get("/players", async(req, res)=>{
    try{
        const data = await Player.find();
        res.send(data).status(200);
        console.log(data);

    }
    catch(e){
        res.status(400).send(e);
    }
})

// Get only one player
app.get("/player/:name", async(req, res)=>{
    try{
        //const name = req.params.name;
        //const data = await Player.findOne({name: decodeURIComponent(name)});  

        const name = decodeURIComponent(req.params.name);
        const country = decodeURIComponent(req.params.country);
        const data = await Player.findOne({ name, country });
        res.status(200).send(data);
        console.log(data);
    }
    catch(e){
        res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

