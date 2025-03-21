const messageSchema = require("../Model/RegistrationSchema");


exports.newRegistration = async (req, res) => {
    console.log("hii")
  console.log(req.body);
  const { name, mobile, email,message,date } = req.body;
  try {
    const addNewUser = await messageSchema.create({
      name,
      mobile,
      email,message,date
    });
    if (addNewUser) {
      res.status(200).json({
        message: "success",
      });
    }
    console.log(addNewUser);
    
  } catch (error) {
    console.log(error);
  }
};

// exports.getUser = async (req, res) => {
//   console.log("getuser controller");

//   try {
//     const getUser = await messageSchema.find();
//     console.log(getUser);
//     if (getUser) {
//       res.status(200).json({
//         message: "success",
//         getUser,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.getUser = async (req, res) => {
  console.log("Get User API hit");

  try {
    const getUser = await messageSchema.find();
    console.log("Fetched Users:", getUser);

    res.status(200).json({
      message: "Success",
       getUser,
    });

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.userDel = async (req, res) => {
  // console.log(req);
  console.log("user delete");

  const { id } = req.params;
  console.log(id);

  try {
    const userDel = await messageSchema.findByIdAndDelete(id);
    console.log(userDel);

    if (userDel) {
      res.status(200).json({
        message: "deleted successfully",
      });
    }
  } catch (error) {}
};