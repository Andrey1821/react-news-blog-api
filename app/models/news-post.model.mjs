import { model, Schema } from 'mongoose';

const NewsPost = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

export default model('newsPost', NewsPost);