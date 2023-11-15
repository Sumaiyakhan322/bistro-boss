import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser}=useContext(AuthContext)
    const [error, setError] = useState("");
    const [seePass,setSeepass]=useState(true);
    const navigate=useNavigate()
    const handlepass=()=>{
      setSeepass(false)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value
        setError("");
        if (password.length < 6) {
            setError("The length of your password must be more than 6 digit");
            return;
          } else if (!/[A-Z]/.test(password)) {
            setError("Your password must have one Capital letter");
            return;
          } 
          createUser(email, password)
          .then((result) => {
            updateProfile(result.user, {
              displayName: `${name}`,
              photoURL: `${photo}`,
            })
              .then()
              .catch()
            Swal.fire({
              position: "center",
              icon: "success",
    
              title: "Successfully register by email and password ",
    
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(result);
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      };
       
        
    
    return (
     <>
     <Helmet>
      <title>Bistro-Boss | Register</title>
     </Helmet>
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
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text" name="photo" placeholder="Your Photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={seePass ?'password' :'text'} name="password" placeholder="password" className="input input-bordered " required />  <button className="absolute bottom-0 right-3 top-9" onClick={handlepass}>click</button>
                {error && <p className="text-red-500">{error}</p>}
                
              </div>
              
              <div className="form-control mt-6 ">
               <input type="submit" className=' btn btn-primary'  value={'Login'} />
              </div>
            </form>
           <p className='text-center my-8'>have already account <Link to='/login'>Log in</Link> </p>
          </div>
        </div>
      </div>
      </>
    );
};

export default Register;