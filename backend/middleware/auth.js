const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

// Ensure the requesting user is authenticated via the HTTP-only JWT cookie
exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies || {};

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
        return next(new ErrorHandler("User not found", 404));
    }

    next();
});

