import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema({
    name: {type: String, required: true, unique: true},
    city: {type: String, required: true},
    image:{type: String, },
    rooms: { type: Number, min: 1, max: 100 }, 
    users: [String],
    owner: {type: String, required: true}
})


const Hotel = mongoose.model("Hotel", hotelSchema)


export default Hotel;






/*Hotel
•	Name - string (required), unique
•	City - string (required),
•	Image Url - string (required),
•	Free Rooms–number(required),must be between 1 and 100,
•	Users Booked a room - a collection of Users
•	Owner – string (required)*/
