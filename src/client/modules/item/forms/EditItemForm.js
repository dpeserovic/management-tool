import FormBase from '../../../common/forms/FormBase';

const fields = ['name', 'categoryId']

const values = {
}

const labels = {
    name: 'Name',
    categoryId: 'Category'
}

const placeholders = {
}

const rules = {
    name: 'required|string',
    categoryId: 'required|numeric'
}

class RegisterCompanyForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default RegisterCompanyForm;