const User = require("../models/userModel");

const AddUser = async (req,res)=>{
    let data  = req.body;
         console.log(data)
        
        let user_added = await User.query().skipUndefined().insert(data).returning("*");

       if(!user_added) return res.send("User not added");
    
        return res.send("User Added");
    },
     GetUsers = async (req,res)=>{
    
        let users = await User.query().skipUndefined();
        
        
        return res.send(users);


    },

     GetUser = async (req,res)=>{
        let data = req.params.userName;
         
         console.log(data);
           
           let user = await User.query().skipUndefined().where("Name",data).first();
           if(user === undefined )   return res.send("no user found")
           
        return res.send(user)
         
    
    },

       
    UpdateUser = async(req,res)=>{
    let data = req.body;
    console.log(data);
    let updated_user = await User.query().skipUndefined().update(data).where("id",data.id);

    if(!updated_user) 
    return res.send("user not updated")
       
    else{
    return res.send(" user Updated")
}

},
 RemoveUser = async(req,res)=>{
    let data = req.body;

    let removed_user = await User.query().skipUndefined().deleteById(data.id);

    if(!removed_user) return res.send(" user not deleted")


    return res.send(" user deleted")

}

    
    module.exports = {
        AddUser,
        GetUsers,
        GetUser,
        UpdateUser,
        RemoveUser
       }
    