import express from "express";
import cors from "cors";
import "dotenv/config";

//db connection
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin',adminRouter)

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
