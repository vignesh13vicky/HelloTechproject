const AdminLogin = require("../Model/AdminLoginSchema");


exports.Login = async (req,res)=>{
    console.log(req.body);
    
    console.log("new login from admin registration");
    const {email,password}=req.body;
  
    try{
        const addNewUser = await AdminLogin.create({email,password})
        if(addNewUser){
            res.status(200).json
            ({message:'success',})
        }
        console.log(addNewUser);

    }
    
    catch(error){
        console.log(error);
        
    } 
}

exports.getLogin = async (req, res) => {
    console.log("Get User API hit");
  
    try {
      const getLogin = await AdminLogin.find();
      console.log("Fetched Users:", getLogin);
  
      res.status(200).json({
        message: "Success",
        users: getLogin,
      });
  
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };


// exports.getUser = async (req, res) => {
//     console.log("Get User API hit");
  
//     try {
//       const getUser = await messageSchema.find();
//       console.log("Fetched Users:", getUser);
  
//       res.status(200).json({
//         message: "Success",
//         users: getUser,
//       });
  
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       res.status(500).json({ message: "Server Error", error: error.message });
//     }
//   };

// exports.Login = async (req, res) =>{
//     console.log("rec body",req.body);
//     const {email, password} = req.body;
//     try {
       
//         if(!email){
//             return res.status(400).json({error: "email is required"})
//         }

//         const newLogin = new this.Login({ email, password });
//         await newLogin.save();

//         res.status(201).json({ message: "Product created successfully!", Login: newLogin });    } 
//         catch (error) {
//             res.status(500).json({ error: error.message});

//     }
// }

