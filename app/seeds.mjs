import Editor from './models/editor.model.mjs';
import bcrypt from 'bcryptjs';

const editors = [
    { username: 'testEditor', password: 'test123' },
    { username: 'testEditor1', password: 'test1234' }
];

export default function createSeeds() {
    editors.forEach(async (editor, index) => {
        const dbEditor = await Editor.findOne({ username: editor.username });

        if (dbEditor) return;

        const hashPassword = bcrypt.hashSync(editor.password, 8);
        const editorHashPass = { ...editor, password: hashPassword };

        await new Editor(editorHashPass).save();

        if (index === editors.length - 1) {
            console.log('Seeds have been created!');
        }
    })
}