const Vendor = require('../models/vendorModel');

const addVendor = async (req, res) => {
    const { name } = req.body;
    try {
      
      const existingVendor = await Vendor.findOne({ name });
      if (existingVendor) {
        return res.status(400).json({ error: 'Vendor name already exists. Please use a different name.' });
      }
  
      const vendor = new Vendor({name});

      await vendor.save();
      console.log("vendor added")
      res.status(201).json({ message: 'Vendor added successfully' });

    } catch (err) {
      res.status(500).json({ error: 'An error occurred while adding the vendor.' });
    }
  };

const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().select("name");
    console.log(vendors)
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports={addVendor,getVendors}