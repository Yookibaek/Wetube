// require: 입력받은 네임의 폴더를 현재 경로에서 찾으려하고 없다면
// node_modules에서 찾는다.
import express from "express";
const app = express();

const PORT = 4000;
const handleListening = () => console.log('listening on: http://localhost:${PORT}');

const handleHome = (req,res)=> res.send("Hello from hom");

const handleProfile = (req,res)=> res.send("You are on my profile");

 
app.get("/",handleHome);
app.get("/profile",handleProfile);
app.listen(PORT,handleListening);