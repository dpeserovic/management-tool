import React from 'react';
import { ManagementToolNav, BasicInput, EditCategoryTable } from '../../../common/components';

import Icon from '@material-ui/core/Icon';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateCategoryTemplate(props) {
    const { form, categories, actions, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Create category</h1>
            <Form>
                <Form.Group>
                    <BasicInput type={'text'} field={form.$('type')} />
                </Form.Group>
                <Form.Group>
                    <Form.Text>{form.error}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button variant="btn btn-primary" onClick={form.onSubmit}><Icon fontSize='large'>category_outlined</Icon></Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-secondary" onClick={navigateDashboard}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
            <EditCategoryTable categories={categories} actions={actions} />
        </div>
    )
}

export default CreateCategoryTemplate;