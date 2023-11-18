import Editor from '../../../models/editor.model.mjs';

export default class AuthProviderService {
    static async getEditor(username){
        return Editor.findOne({ username })
    }
}