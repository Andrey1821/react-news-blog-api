import { model, Schema } from 'mongoose';

const Editor = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

export default model('Editor', Editor);