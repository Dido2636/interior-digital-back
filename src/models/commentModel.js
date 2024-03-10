import { Schema, mongoose } from "mongoose";

const commentSchema = new Schema ({
    commentaire: String,
    mediaType:{type: String, enum: ['plan', '3d', 'Devis'],required: true},
    mediaId: { type: mongoose.Schema.Types.ObjectId, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}
})

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;