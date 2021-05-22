const express = require("express");
const routes = express.Router()


const profile = {
    avatar:"https://github.com/danielusi.png",
    name:"Daniel Benício",
    email:"danielbenicio123@gmail.com",
    password:"jacamole",
    cep:"06436310"
}

const jobs = []

routes.get('/', (req, res) => res.render("index"))
routes.get('/signup', (req, res) => res.render("signup"))
routes.post('/signup', (req, res) =>{
    
    jobs.push({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cep:req.body.cep
    })
    console.log(jobs);
    return res.redirect('/');
});
routes.get('/login', (req, res) => res.render("login"))
routes.get('/profile', (req, res) => res.render("profile", { profile }))

module.exports = routes;