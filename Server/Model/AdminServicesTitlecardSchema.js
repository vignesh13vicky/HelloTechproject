const mongoose = require ("mongoose");

const AdminServicesTitlecard = new mongoose.Schema({
    image: { url: { type: String }, public_id: { type: String } },
    servicestitle:{type:String, require:true},
    servicesdescription:{type:String, require:true},
});

// const AdminServicesTitlecard = mongoose.model("services title card",AdminServicesTitlecardSchema);

module.exports = mongoose.model("services title card",AdminServicesTitlecard); 