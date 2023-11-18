import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AuthProviderService from './auth-provider.service.mjs';

export default class AuthService {
    static comparePasswords(comparablePass, editorPassword) {
        return bcrypt.compareSync(comparablePass, editorPassword);
    }

    static getResponseEditor(editor) {
        const token = this._generateAccessToken(editor);

        return {
            username: editor.username,
            token
        };
    }

    static _generateAccessToken(editor) {
        const payload = { id: editor._id, username: editor.username };
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    }

    static async getEditor(username) {
        return AuthProviderService.getEditor(username);
    }
}