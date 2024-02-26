 const {createUser,login,findUser,deleteUser} = require('../service/userService');

const register = async(req,res) => {
    try{
        const response = await createUser(req.body);
        res.status(200).json({response});

    }catch(error){
        res.status(500).json(error.message)

    }

};

const logins = async(req,res) =>{
    return await login(req.body)
    .then((response) => res.status(200).json(response))
    .catch((error)=>res.status(400).json(error.message))
    // try{
    //     const response = await login(req.body)
    //     res.status(200).json({response});
    // }
    // catch(error){
    //     res.status(401).json(error.message);
    // }
};
const findUser = async(req,res)=>{
    return await findUser(req.body)
    .then((response)=>res.body(200).json(response))
    .catch((error)=>res.status(400).json(error.message))

};
const deleteUser  = async(req,res)=>{
    try{
        const response = await deleteUser(req.body)
        res.status(200).json({response});
    }
    catch(error){
        res.status(400).json(error.message)
    }
}
module.exports = {register,logins,findUser,deleteUser};