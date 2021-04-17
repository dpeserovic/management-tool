import FormBase from '../../../common/forms/FormBase';

const fields = ['type']

const values = {
}

const labels = {
    type: 'Type'
}

const placeholders = {
}

const rules = {
    type: 'required|string'
}

class EditCategoryForm extends FormBase {
    constructor(hooks) {
        super({ fields, values, labels, placeholders, rules }, { hooks });
    }
}

export default EditCategoryForm;