import express from "express";   

const app = express();
app.use((req, res, next) => {
console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
next();
});

const movies = [
{
    "id": 1,
    "title": "Inception",
    "description": "Una película de ciencia ficción dirigida por Christopher Nolan",
    "votes": 0,
},
{
    "id": 2,
    "title": "Titanic", 
    "description": "Historia romántica dirigida por James Cameron",
    "votes": 0
},
{ 
    "id": 3, 
    "title": "The Matrix", 
    "description": "Película de acción y ciencia ficción dirigida por los hermanos Wachowski", 
    "votes": 0 
},]

app.post("/movies", (req, res) => {
res.json(movies);
    });

app.get()