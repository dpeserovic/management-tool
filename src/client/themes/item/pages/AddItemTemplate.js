import React from 'react';
import { ManagementToolNav } from '../../../common/components'
import { TextField } from '../../../common/components'
import { Dropdown } from '../../../common/components'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddItemTemplate(props) {
    const { form, categories, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Add item</h1>
            <Form>
                <Form.Group>
                    <TextField type={'text'} field={form.$('name')} />
                </Form.Group>
                <Form.Group>
                    <Dropdown store={categories} type={'text'} field={form.$('categoryId')} />
                </Form.Group>
                <Form.Group>
                    <Form.Text>{form.error}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button variant="btn btn-dark" onClick={form.onSubmit}>Add</Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-secondary" onClick={navigateDashboard}>Back</Button>
        </div>
    )
}

export default AddItemTemplate;