import React, { useState } from 'react';
const LoginForm=()=>{


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')

    return(
        <React.Fragment>
            <h2>Have an account ?</h2>
            <h4>Login Here</h4>

            <br/>

            <form action="" noValidate>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input noValidate type="text" id="email" name="email" placeholder="Email" value={email}
                    onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input noValidate type="password" id="password" name="password" placeholder="Password" value={password}
                    onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary mr-2">
                    Login | <i className="fas fa-sign-in-alt"></i>
                </button>

                <button className="btn btn-outline-secondary">
                    Cancel | <i className="fas fa-times"></i>
                </button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;