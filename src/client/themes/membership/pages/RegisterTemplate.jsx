import React from 'react';

function RegisterTemplate(props) {
    const { navigateLogin } = props.viewStore;
    return (
        <div>
            <h1>Register</h1>
            <button onClick={navigateLogin}>Go to Login</button>
        </div>
    )
}

export default RegisterTemplate;