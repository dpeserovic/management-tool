import React from 'react';
import { ManagementToolNav, BasicInput } from '../../../common/components'

import Icon from '@material-ui/core/Icon';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyProfileTemplate(props) {
    const { isOwner, form, users, items, categories, navigateDashboard } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>My profile</h1>
            {isOwner ?
                <Form>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('id')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('email')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'password'} field={form.$('password')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('name')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('address')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('city')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <h3>Total users: {users.data.length}</h3>
                    </Form.Group>
                    <Form.Group>
                        <h3>Total items: {items.data.length}</h3>
                    </Form.Group>
                    <Form.Group>
                        <h3>Total categories: {categories.data.length}</h3>
                    </Form.Group>
                </Form>
                :
                <Form>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('id')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('email')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'password'} field={form.$('password')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <BasicInput type={'text'} field={form.$('companyId')} isDisabled={true} />
                    </Form.Group>
                    <Form.Group>
                        <h3>Total company's users: {users.data.length}</h3>
                    </Form.Group>
                    <Form.Group>
                        <h3>Total company's items: {items.data.length}</h3>
                    </Form.Group>
                    <Form.Group>
                        <h3>Total company's categories: {categories.data.length}</h3>
                    </Form.Group>
                </Form>
            }
            <Button variant="btn btn-secondary" onClick={navigateDashboard}><Icon fontSize='large'>keyboard_backspace_outlined</Icon></Button>
        </div>
    )
}

export default MyProfileTemplate;