const express=require("express");
const app=express();
const port=3002;
const users=[
    {
        id: 1001,
        name: "Udit Shrivastava",
        email: "abc@gmail.com",
        password: "abes"

    }
]
app.get("/users",(req,res)=>{
    res.status(200);
    res.json(users)
})
app.post("/users",(req,res)=>{
    const {id,name,email,password}=req.body;
    const newId=users.length>0? users[users.length-1].id+1 : 1001;
    const newUser={
        id: newId,name,email,password
    }
    users.push(newUser);
    res.status(201);
    res.json({status:"success",message:"data created successfully"})
})
app.delete("/deleteuser/:id",(req,res)=>{
    const uid=req.params.id;
    if(uid!=null){
        const index=users.findIndex(ind=>ind.id==uid)
        if(index!=-1){
            users.splice(index,1);
            res.status(200);
            res.json({status: "success",message: "user deleted successfully"})
        }
        else{
            res.status(400);
            res.json({status: "fail",message: "user id not found"})
        }
    }
})

app.listen(port,(err)=>{
try{
    if(err) throw err;
    else{
        console.log(`server is running on port ${port}`)
    }
}
catch(err){
    console.log("Server Error:",err.message);
}
})

