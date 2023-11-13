import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
 const capchaRef=useRef(null)
 const [disable,setDisable]=useState(true)

   useEffect(()=>{
    loadCaptchaEnginge(6); 
   },[])


    const handleSubmit=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
    }
    const handleValidateCaptcha =()=>{
         const value=capchaRef.current.value;
         console.log(value);
         if(validateCaptcha(value)){
              setDisable(false)
         }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" name="captcha" placeholder="type the text above" className="input input-bordered" ref={capchaRef} required />
               <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs my-2'>Validate</button> 
              </div>
              <div className="form-control mt-6 ">
               <input type="submit" className=' btn btn-primary' disabled={disable} value={'Login'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
