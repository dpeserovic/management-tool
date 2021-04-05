import FormBase from '../../../common/forms/FormBase';

const fields = ['type', 'categoryId']

const values = {
}

const labels = {
    type: 'Name',
    categoryId: 'Category'
}

const placeholders = {
}

const rules = {
    type: 'required|string',
    categoryId: 'required'
}

class RegisterCompanyForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default RegisterCompanyForm;