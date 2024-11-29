const checkPermission = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role; // Assuming `req.user` is set by authentication middleware

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
    }

    next(); // User has permission, proceed to the next middleware/controller
  };
};

module.exports = checkPermission;
