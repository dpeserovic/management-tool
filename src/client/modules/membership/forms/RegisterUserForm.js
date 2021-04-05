import FormBase from '../../../common/forms/FormBase';

const fields = ['email', 'password', 'confirmPassword', 'companyId']

const values = {
}

const labels = {
    email: 'E-mail',
    password: 'Password',
    confirmPassword: 'Confirm password',
    companyId: 'Company key'
}

const placeholders = {
}

const rules = {
    email: 'required|email',
    password: 'required|string|min:8|max:16',
    confirmPassword: 'required|same:password',
    companyId: 'required|string|min:5|max:5'
}

class RegisterUserForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default RegisterUserForm;