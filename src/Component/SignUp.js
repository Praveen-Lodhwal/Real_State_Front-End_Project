import React, { useEffect, useState } from 'react'
import './SignUp.css'
import axios from 'axios';


function SignUp() {
  // const [name, setname] = useState("");
  // const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [avatar, setavatar] = useState("");


  function handlesubmit(e){
    e.preventDefault();

    const formdata ={
      email : email,
      first_name : first_name,
      last_name : last_name,
      avatar : avatar
    }
    
    axios.post("https://reqres.in/api/users?page=2", formdata).then((res)=>{
      setuserdata([...userdata, res.data.data])
      console.log(res)
      }).catch((err)=>{
      console.log("error",err)
    })
    
    console.log(formdata)
    // setname("");
    // setemail("");
    // setpassword("");
  }
  
  const [userdata , setuserdata]= useState([])
  
  useEffect(()=>{
    getdata();
  },[])

  const getdata =()=>{
    axios.get("https://reqres.in/api/users?page=2").then((res)=>{
    setuserdata(res.data.data)})
    .catch((err)=>{
    console.log("error",err)
  })}  

  //==============================
  return(
    <>
      <section className="vh-50 bg-image" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-6 col-sm-7 col-xl-6">
                <div className="card" style={{borderRadius: "15px"}}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-3 mt-n3">Create an account</h2>
                    <form onSubmit={handlesubmit}>
                      <div className="form-outline mb-2 ">
                        <input type="text" value={email} onChange={((e)=>{setemail(e.target.value)})} className="form-control form-control-lg" />
                        <label className="form-label" >Your Name</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="text" value={first_name} onChange={((e)=>{setfirst_name(e.target.value)})} className="form-control form-control-lg" />
                        <label className="form-label" >Your Email</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="text" value={last_name} onChange={((e)=>{setlast_name(e.target.value)})} className="form-control form-control-lg" />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="text" value={avatar} onChange={((e)=>{setavatar(e.target.value)})} className="form-control form-control-lg" />
                        <label className="form-label">Password</label>
                      </div>
                      
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">SignUp</button>
                      </div>
                      <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div>
        <h4>Data Table</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {userdata?.map(item =>( 
              <tr key={item.id}>
                <td><h5>{item.id}</h5></td>
                <td><h5>{item.email}</h5></td>
                <td><h5>{item.first_name}</h5></td>
                <td><h5>{item.last_name}</h5></td>
                <td><img src={item.avatar} alt=""/></td>
              </tr>           
            ))}
          </tbody>
        </table>
      </div>      
    </> 
)}

export default SignUp
