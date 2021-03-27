import FormBase from '../../../common/forms/FormBase';

const fields = ['email', 'password', 'confirmPassword', 'companyName', 'companyAddress', 'companyCity']

const values = {
}

const labels = {
    email: 'E-mail',
    password: 'Password',
    confirmPassword: 'Confirm password',
    companyName: 'Company name',
    companyAddress: 'Company address',
    companyCity: 'Company city'
}

const placeholders = {
}

const rules = {
    email: 'required|email',
    password: 'required|string|min:8|max:16',
    confirmPassword: 'required|same:password',
    companyName: 'required|string|',
    companyAddress: 'required|string|',
    companyCity: 'required|string|'
}

class RegisterCompanyForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default RegisterCompanyForm;