import React from 'react'
import "./Item.css"

export default function Login() {
  return (
    <div>
      <div className="container mainlogin"><div className="row"><div className='col-3'></div>
      <div className="col-6">

      <div className="container mainlogin" >
        <div className="row header">
          

            <div className="col-6"><img src="src/assets/KFCLogo.jpg" alt=""  width={180} height={180}/></div>
            <div className="col-sm-6 text-center">
                <form action='' method='post'>
                    <h2 className=''>Login</h2>
                    <div className="form-group">
                    <input type="text" placeholder='Email or Phone Number' className='form-control mt-3'/>
                    <input type="password" placeholder='Password' className='form-control mt-3'/>
                    <div className="d-flex justify-content-between pt-3"><button className='logbtn text-white'>Log in</button>
                    <p className='pt-2 text-danger'>Forget Password?</p></div>
                    </div>

                </form>
            </div>
        

        </div>
      </div></div>
      <div className='col-3'></div>
    </div></div>
    </div>
  )
}
