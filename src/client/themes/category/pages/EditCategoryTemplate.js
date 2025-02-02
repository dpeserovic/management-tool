import React from 'react';
import { ManagementToolNav, BasicInput } from '../../../common/components';

import Icon from '@material-ui/core/Icon';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditCategoryTemplate(props) {
    const { form, navigateCreateCategory } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Edit category</h1>
            <Form>
                <Form.Group>
                    <BasicInput type={'text'} field={form.$('type')} />
                </Form.Group>
                <Form.Group>
                    <Form.Text>{form.error}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button variant="btn btn-primary" onClick={form.onSubmit}><Icon fontSize='large'>edit_outlined</Icon></Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-secondary" onClick={navigateCreateCategory}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
        </div>
    )
}

export default EditCategoryTemplate;