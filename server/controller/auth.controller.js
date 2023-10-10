const {response} = require('express')
const AuthService = require('../auth)
    const register = async (req,res)=>{
    await AuthService.save(req.body)
        .then((response) =>res.json(response))
        .catch((error) => res.json(error))
    }
    const login = async (req,res)=>{
    await AuthService.login(req.body)
        .then((response) =>res.json(response))
        .catch((error) => res.json(error))
}
module.exports = {register,login}
