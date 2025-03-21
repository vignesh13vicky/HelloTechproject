// const { get } = require("mongoose");
const AdminServicesTitlecard = require("../Model/AdminServicesTitlecardSchema");
const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../Cloudinary");

const multerConfig = multer({
  storage: multer.memoryStorage(),
});

exports.upload = multerConfig.single("image");

exports.AdminServicesTitlecard = async (req, res, next) => {
  console.log(req.body);
  console.log("New Service Title Card");
  if (!req.file) {
    return res
      .status(400)
      .json({
        error: "No file uploaded. Ensure you're using multipart/form-data.",
      });
  }
  // const {servicestitle,servicesdescription}=req.body;
  try {
    const fileName = `intern_${Date.now()}`;
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "intern",
        public_id: fileName,
        resource_type: "auto",
      },
      (err, result) => {
        if (err) {
          console.error("Cloudinary upload error:", err);
          return res.status(500).json({
            error: "Cloudinary upload failed",
          });
        }
        console.log("Cloudinary upload success:", result);
        req.cloudResult = result;
        next();
      }
    );
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  } catch (error) {
    console.error("Unexpected error during upload:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.getadminServicesTitlecard = async (req, res) => {
  console.log("Im from getting services from server");
  if (!req.cloudResult) {
    return res
      .status(500)
      .json({ error: "Cloudinary upload did not complete" });
  }

  const { url, public_id } = req.cloudResult;
  const { servicestitle, servicesdescription } = req.body;

  try {
    const getadminServices = await AdminServicesTitlecard.create({
      image: { url, public_id },
      servicestitle,
      servicesdescription,
    });
    console.log("Getting data services title card", getadminServices);

    res.status(200).json({
      message: "Success",
      imageUrl: url,
      users: getadminServices,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getadminServicesTitlecardImage = async (req, res) => {
  console.log("getting deatils of the images");
  try {
    const getadminServicesTitlecardImageGetting = await AdminServicesTitlecard.find();
    // console.log(getadminServicesTitlecardImage);
    if (getadminServicesTitlecardImageGetting) {
      res.status(200).json({
        message: "success",
        getadminServicesTitlecardImageGetting,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getadminServicesTitlecardImageOne = async (req, res) => {

  const {id}=req.params;
  console.log(id);
  
  console.log("getting deatils of the images");
  try {
    const getadminServicesTitlecardImageGettingOne = await AdminServicesTitlecard.findById({_id:id});
    // console.log(getadminServicesTitlecardImage);
    if (getadminServicesTitlecardImageGettingOne) {
      res.status(200).json({
        message: "success",
        getadminServicesTitlecardImageGettingOne,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Save file details to MongoDB
// exports.fileSave = async (req, res) => {
//   console.log("Saving file details to database...");

//   if (!req.cloudResult) {
//     return res.status(500).json({ error: "Cloudinary upload did not complete" });
//   }

//   const { url, public_id } = req.cloudResult;
//   const { servicestitle, servicesdescription} = req.body;

//   try {
//     const fileUpload = await imageModel.create({
//       image: { url, public_id },
//       servicestitle,
//       servicesdescription,
//     });

//     console.log("File successfully saved:", fileUpload);

//     return res.status(201).json({
//       message: "File uploaded successfully",
//       imageUrl: url,
//       file: fileUpload
//     });

//   } catch (error) {
//     console.error("Database Error:", error);
//     return res.status(500).json({ error: "Database save failed" });
//   }
// };

// exports.DeleteadminServicesTitlecard = async (req, res) => {
//   // console.log(req);
//   console.log("user delete");

//   const { id } = req.params;
//   console.log(id);

//   try {
//     const userDel = await AdminServicesTitlecard.findByIdAndDelete(id);
//     console.log(DeleteadminServicesTitlecard);

//     if (DeleteadminServicesTitlecard) {
//       res.status(200).json({
//         message: "deleted successfully",
//       });
//     }
//   } catch (error) {}
// };
