import React from 'react';
import { ManagementToolNav } from '../../../common/components'
import { TextField } from '../../../common/components'

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
                    <TextField type={'text'} field={form.$('email')} />
                </Form.Group>
                <Form.Group>
                    <TextField type={'password'} field={form.$('password')} />
                </Form.Group>
                <Form.Group>
                    <Form.Text>{form.error}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button type='submit' variant='btn btn-dark' onClick={form.onSubmit}>Log in</Button>
                </Form.Group>
            </Form>
            <Button variant="btn btn-secondary" onClick={navigateRegister}>Go to Register</Button>
        </div>
    )
}

export default LoginTemplate;