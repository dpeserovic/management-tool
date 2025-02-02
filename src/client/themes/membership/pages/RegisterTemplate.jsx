import React from 'react';
import { ManagementToolNav, BasicInput } from '../../../common/components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RegisterTemplate(props) {
    const { userForm, companyForm, navigateLogin } = props.viewStore;
    return (
        <div>
            <ManagementToolNav />
            <h1>Register</h1>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <h2>User</h2>
                            <Form.Group>
                                <BasicInput type={'text'} field={userForm.$('email')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'password'} field={userForm.$('password')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'password'} field={userForm.$('confirmPassword')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'text'} field={userForm.$('companyId')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Text>{userForm.error}</Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Button type='submit' variant='btn btn-primary' onClick={userForm.onSubmit}>Create User</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <h2>Company</h2>
                            <Form.Group>
                                <BasicInput type={'text'} field={companyForm.$('id')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'text'} field={companyForm.$('email')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'password'} field={companyForm.$('password')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'password'} field={companyForm.$('confirmPassword')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'text'} field={companyForm.$('name')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'text'} field={companyForm.$('address')} />
                            </Form.Group>
                            <Form.Group>
                                <BasicInput type={'text'} field={companyForm.$('city')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Text>{companyForm.error}</Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Button type='submit' variant='btn btn-primary' onClick={companyForm.onSubmit}>Create Company</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Button variant="btn btn-secondary" onClick={navigateLogin}>Go to Login</Button>
        </div>
    )
}

export default RegisterTemplate;