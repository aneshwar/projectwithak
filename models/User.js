import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    surname: {
        type: String,
        required: true,
        maxlength: 30,
    },
    age: {
        type: Number,
        required: true,

    },
    password : {
        type: String,
        required: true,
        maxlength: 50,
    },
},
{
    timestamps: true
},
)
export default mongoose.models.UserSchema || mongoose.model("posts", UserSchema);
