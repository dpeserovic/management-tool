import FormBase from '../../../common/forms/FormBase';

const fields = ['id', 'email', 'password', 'confirmPassword', 'name', 'address', 'city']

const values = {
}

const labels = {
    id: 'Key',
    email: 'E-mail',
    password: 'Password',
    confirmPassword: 'Confirm password',
    name: 'Name',
    address: 'Address',
    city: 'City'
}

const placeholders = {
}

const rules = {
    id: 'required|string|min:5|max:5',
    email: 'required|email',
    password: 'required|string|min:8|max:16',
    confirmPassword: 'required|same:password',
    name: 'required|string',
    address: 'required|string',
    city: 'required|string'
}

class RegisterCompanyForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default RegisterCompanyForm;