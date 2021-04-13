import React from 'react';
import { ManagementToolNav, BasicInput, BasicDropdown } from '../../../common/components';

import Icon from '@material-ui/core/Icon';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditItemTemplate(props) {
    const { form, categories, navigateVirtualWarehouse } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Edit item</h1>
            <Form>
                <Form.Group>
                    <BasicInput type={'text'} field={form.$('name')} />
                </Form.Group>
                <Form.Group>
                    <BasicDropdown type={'text'} field={form.$('categoryId')} categories={categories} />
                </Form.Group>
                <Form.Group>
                    <Form.Text>{form.error}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button variant="btn btn-primary" onClick={form.onSubmit}><Icon fontSize='large'>edit_outlined</Icon></Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-secondary" onClick={navigateVirtualWarehouse}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
        </div>
    )
}

export default EditItemTemplate;