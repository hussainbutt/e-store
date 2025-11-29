const express = require("express");
const path = require("path");
const router = express.Router();
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const Shop = require("../model/shop");
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
// const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const sendShopToken = require("../utils/sendShopToken");
const catchAsyncError = require("../middleware/catchAsyncError");
const { upload } = require("../multer");
const fs = require("fs");

router.post(
  "/create-shop",
  upload.single("file"),
  catchAsyncError(async (req, res, next) => {
    try {
      const {
        name,
        email,
        password,
        description,
        address,
        phoneNumber,
        zipCode,
      } = req.body;

      console.log(zipCode);
      

      const shopEmail = await Shop.findOne({ email });
      if (shopEmail) {
        const filename = req.file.filename;
        const filePath = "uploads/" + filename;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            res.status(500).json({ message: "Error deleting file" });
          }
        });
        return next(new ErrorHandler("Seller account already exists", 400));
      }
      const filename = req.file.filename;
      const filePath = "/" + filename;
      const seller = {
        name: req.body.name,
        email,
        password: req.body.password,
        avatar: { url: filePath },
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
      };
      const activationToken = createActivationToken(seller);

      const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;

      try {
        await sendMail({
          email: seller.email,
          subject: "E-Shop - Account Activation",
          message: `Hello ${seller.name},\n\nPlease click on the link below to activate your shop:\n\n${activationUrl}\n\nThank you!`,
        });
        res.json({
          success: true,
          message: `Please check your email - ${seller.email} to activate your shop`,
        });
      } catch (error) {
        console.error("Error creating activation token:", error);
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

const createActivationToken = (seller) => {
    console.log(seller);
    return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    })
};

//activate user
router.post("/activation", catchAsyncError(async (req, res, next) => {
    try {
        console.log("inside activation");
        
        const { activation_token } = req.body;

        const newSeller = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);
        if (!newSeller) {
            return next(new ErrorHandler("Invalid activation token", 400));
        }
        const { name, email, avatar, password,zipCode,phoneNumber,address } = newSeller;
        let seller = await Shop.findOne({ email });
        if (seller) {
            return next(new ErrorHandler("Seller account already exists", 400));
        }
        seller = await Shop.create({
            name,
            email,
            avatar,
            password,
            zipCode,
            phoneNumber,
            address
        });

        sendShopToken(seller, 201, res);


    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}))
module.exports = router;


// login shop
router.post("/login-shop", catchAsyncError(async (req, res, next) => {
    console.log("Login request received");

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorHandler("Please provide the all fields!", 400));
        }

        const user = await Shop.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorHandler("Shop doesn't exists!", 400));
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return next(
                new ErrorHandler("Please provide the correct information", 400)
            );
        }

        sendShopToken(user, 201, res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
})
);

//load shop
router.get("/getSeller", isSeller, catchAsyncError(async (req, res, next) => {
    try {
      console.log("seller id: ", req.seller._id);
      
        const seller = await Shop.findById(req.seller._id);
        if (!seller) {
            return next(new ErrorHandler("User not found", 404));
        }
        res.status(200).json({
            success: true,
            seller,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));