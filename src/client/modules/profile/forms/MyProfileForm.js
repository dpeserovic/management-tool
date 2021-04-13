import FormBase from '../../../common/forms/FormBase';

const fields = ['id', 'email', 'password', 'name', 'address', 'city', 'companyId']

const values = {
}

const labels = {
    id: 'ID',
    email: 'E-mail',
    password: 'Password',
    name: 'Name',
    address: 'Address',
    city: 'City',
    companyId: 'Company key'
}

const placeholders = {
}

const rules = {
    id: 'string',
    email: 'email',
    password: 'string',
    name: 'string',
    address: 'string',
    city: 'string',
    companyId: 'string'
}

class MyProfileForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default MyProfileForm;