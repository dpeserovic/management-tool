import React from 'react';
import { ManagementToolNav, BasicInput } from '../../../common/components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginTemplate(props) {
    const { form, navigateRegister } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Login</h1>
            <Form>
                <Form.Group>
                    <BasicInput type={'text'} field={form.$('email')} />
                </Form.Group>
                <Form.Group>
                    <BasicInput type={'password'} field={form.$('password')} />
                </Form.Group>
                <Form.Group>
                    <Form.Text>{form.error}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button type='submit' variant='btn btn-primary' onClick={form.onSubmit}>Log in</Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-secondary" onClick={navigateRegister}>Go to Register</Button>
        </div>
    )
}

export default LoginTemplate;