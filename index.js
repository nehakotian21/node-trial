import express from "express";
import dotenv from "dotenv";
import errorHandling from "./middlewares/error.middleware";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("🚀 Main Server started successfully!!!");
});

app.get("/check/:val", (req, res) => {
  const { val } = req.params;
  if (val.length > 5) {
    return res.status(200).send("All Okay");
  } else {
    const err = new Error("Something went wrong");
    err.statusCode = 500;
    // console.log(err);
    throw err;
  }
});

app.use(errorHandling);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port : ${PORT} `);
});

// app.get("/check/:val", (req, res)=>{
//     try{

//         const {val} = req.params;
//         if(val.length >5){
//             return res.status(200).send("All Okay")
//         }else{
//             throw "Something went wrong"
//         }

//     }catch(err){
//         console.log("🚨"+ err)
//         return res.status(500).json({
//             message:"Something went wrong",
//             success: false
//         })
//     }
// })
