import express from "express"
import { protect } from "../middleware/auth.js"
import { addBike } from "../controllers/ownerController.js";
import   {changeRoleToOwner} from "../controllers/ownerController.js"
import multer from "multer";
const ownerRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
ownerRouter.post("/change-role",protect,changeRoleToOwner)
ownerRouter.post("/add-bike",upload.single("image"),protect,addBike )
export default ownerRouter;