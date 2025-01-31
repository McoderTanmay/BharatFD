import mongoose, { Schema } from "mongoose";

const faqSchema = new Schema({
    question:{type: String, require: true},
    answer:{type: String, require: true},
    translations:
    {
        hi:{type: String},
        bn:{type: String},
    }
});

export default mongoose.model("FAQ", faqSchema);