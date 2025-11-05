const adminAuth = (res, req, next) => {
  console.log("admin is getting checked");

  const token = "xyz";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("You are not authorised");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz1";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("You are not authorised");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
