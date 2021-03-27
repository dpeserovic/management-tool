import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default () => (
    <div>
        <Nav className="nav">
            <Nav.Item>
                <Nav.Link disabled>
                    <h3 className="link-1">Management tool</h3>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
)