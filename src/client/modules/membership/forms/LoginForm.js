import FormBase from '../../../common/forms/FormBase';

const fields = ['email', 'password']

const values = {
}

const labels = {
    email: 'E-mail',
    password: 'Password'
}

const placeholders = {
}

const rules = {
    email: 'required|email',
    password: 'required|string|min:8|max:16'
}

class LoginForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default LoginForm;