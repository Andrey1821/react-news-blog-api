import ResponseBody from '../../core/response-body.mjs';
import AuthService from './services/auth.service.mjs';

const wrongCredError = new ResponseBody(`Username or password is wrong`).error;
const loginError = new ResponseBody('Login error').error;

class AuthController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const editor = await AuthService.getEditor(username);

            if (!editor) {
                return res.status(400).json(wrongCredError)
            }

            const isValidPass = AuthService.comparePasswords(password, editor.password);

            if (!isValidPass) {
                return res.status(400).json(wrongCredError);
            }

            const resEditor = AuthService.getResponseEditor(editor);
            const resData = new ResponseBody(resEditor).data;

            return res.json(resData);
        } catch (e) {
            res.status(400).json(loginError);
        }
    }
}

export default new AuthController();