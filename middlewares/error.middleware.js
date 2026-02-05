console.log("🚨 ERROR HANDLING started");

const errorHandling = (err, req, res, next) => {
  console.log("🚨 ERROR ", err);

  return res.status(err.statusCode || 500).json({
    message: `🚨 ${err.message || "Something went wrong!!!"}`,
    success: false,
  });
};

export default errorHandling;