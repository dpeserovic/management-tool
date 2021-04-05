import React from 'react';
import { ManagementToolNav } from '../../../common/components'
import { TextField } from '../../../common/components'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateCategoryTemplate(props) {
    const { form, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Create category</h1>
            <Form>
                <Form.Group>
                    <TextField type={'text'} field={form.$('type')} />
                </Form.Group>
                <Form.Group>
                    <Button variant="btn btn-dark" onClick={form.onSubmit}>Create</Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-light" onClick={navigateDashboard}>Back</Button>
        </div>
    )
}

export default CreateCategoryTemplate;