import React from 'react';

function LoginTemplate(props) {
    const { navigateRegister } = props.viewStore;
    return (
        <div>
            <h1>Login</h1>
            <button onClick={navigateRegister}>Go to Register</button>
        </div>
    )
}

export default LoginTemplate;