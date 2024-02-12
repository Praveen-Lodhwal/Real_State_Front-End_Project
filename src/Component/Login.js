import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [email , setemail] = useState();
  const [password , setpassword] = useState();

  const handlesubmit=(e)=>{
    e.preventDefault();

    const userdata = {
      email:email,
      password:password,
    }
    console.log(userdata)
  }

  
  return (
    <>
      <section className="vh-100 login-form">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="img/property-4.jpg" className="img-fluid" alt="Sample image"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login-form" >
              <h4 className='text-center'>Login your account</h4>

              <form onSubmit={handlesubmit}>

                <div className="form-outline mb-4">
                  <input required type='email' value={email} onChange={((e)=>{setemail(e.target.value)})} className="form-control form-control-lg"
                    placeholder="enter email" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-3">
                  <input type="password" required value={password} onChange={((e)=>{setpassword(e.target.value)})} className="form-control form-control-lg"
                    placeholder="enter password" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-sm" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
