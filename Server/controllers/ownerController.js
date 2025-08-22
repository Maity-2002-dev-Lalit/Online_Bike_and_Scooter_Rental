import User from "../models/User.js";
import imagekit from "../configs/imageKit.js";
import Bike from "../models/Bike.js";
import fs from "fs";
export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id } = req.user;
        await User.findByIdAndUpdate(_id, { role: "owner" })
        res.json({ success: true, message: 'Now you can list the cars ' })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export const addBike = async (req, res) => {
    try {

        const { _id } = req.user;
        let bike = JSON.parse(req.body.carData);
        const imageFile = req.file;
        const fileBuffer = fs.readFileSync(imageFile.path);
        const reponse = await imagekit.upload({
            file: fileBuffer,
            filename: imageFile.originalname,
            folder: "/cars",
        })
        
        var optimizedimageUrl = imagekit.url({
            path:response.filepath,
            path: "/default-image.jpg",
            transformation: [
                {width:'1280'},
                {quality:'auto'},
                {format:'webp'}
            ]
        });
        const image=optimizedimageUrl;
        await Bike.create({...bike,owner:_id,image})
        res.json({success:true,message:"Bike Added"})

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}