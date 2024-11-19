const Resource = require('../models/resourceModel');
const multer=require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
const upload=multer({storage:storage})

const addResource = async (req, res) => {
  try {

    const { fullName, vendor, technology } = req.body;
    const resume=req.file?req.file.filename:undefined;

    const resource = new Resource({
      fullName,
      resume,
      vendor,
      technology,
    });

    await resource.save();
    res.status(201).json({ message: 'Resource added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('vendor', 'name');
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {addResource,getResources}
