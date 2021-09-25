const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const users = [
    {
        id: "1",
        username: "John",
        password: "John0908",
        isAdmin: true,
    },
    {
        id: "2",
        username: "Jane",
        password: "Jane0908",
        isAdmin: false,
    }
];

app.post("/api/login", (req,res) => {
    const {username, password} = req.body;
    const user = users.find(u=>{
        return u.username == username && u.password == password;
    });
    if(user){
        //Generate and access token
        const accessToken = jwt.sign
        res.json(user);
    }else{
        res.status(400).json("User not found")
    }
    res.json("Route Works")
})

app.listen(5000, () => console.log("Server running"));