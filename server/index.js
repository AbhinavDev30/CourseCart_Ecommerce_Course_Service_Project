import express from "express";
const app = express();
import userRoutes from "./router/userRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import {
  ServiceDetails,
  getService,
  saveService,
  userProduct,
} from "./controller/serveController.js";
import {
  addUserData,
  getuserDataforcheckout,
} from "./controller/userDataController.js";

// import contactRouter from "./router/contactRouter.js";
import cors from "cors";

import multer from "multer";
import { deleteService, updateService } from "./controller/adminController.js";

// import { getDatabase } from "./Database/Database.js";

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
dotenv.config();
app.use(cors(corsOptions));
app.use(express.json());

app.use(errorMiddleware);

mongoose
  .connect(process.env.MONGODB_URI)

  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("Database connection error");
  });

const storageServe = multer.diskStorage({
  destination: "uploadServ/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const uploadServ = multer({ storage: storageServe });
app.post("/serviceDataImg", uploadServ.single("image"), saveService);
app.put("/updateService/:id", uploadServ.single("image"), updateService);

app.delete("/deleteService", deleteService);

app.get("/serviceDetail", ServiceDetails);

app.post("/userCheckout", addUserData);
app.get("/usersData", getuserDataforcheckout);

app.use("/api/user", userRoutes);

app.get("/serviceData", getService);

//UserService

app.post("/buyProduct", userProduct);
