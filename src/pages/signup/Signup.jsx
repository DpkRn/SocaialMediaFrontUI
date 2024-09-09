import { useFormik } from "formik";
import "./signup.css";
import { Validation } from "../../validationSchama/Validation";

function Signup() {
  const registerUser=(userData)=>{
      fetch('https://socaial-media-api.vercel.app/api/auth/register',{
          method:'POST',
          headers: {
              'Content-Type': 'application/json', // Tell the server we are sending JSON
            },
            body: JSON.stringify(userData),
      }).then(res=>res.json()).then(data=>alert("register successfull !")).catch((err)=>{
        alert("Check internet connection")
      })
  }

  const { errors, values, handleSubmit, touched, getFieldProps } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpass: "",
    },

    onSubmit: () => {
      const {confirmpass,...other}=values
      console.log(other);
      registerUser(other)
      
    },
    validationSchema:Validation
  });

  return (
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupLeft">
          <h1 className="logo">Connect</h1>
          <span className="logoDesc">Connect with friends around world</span>
        </div>
        <div className="signupRight">
          <form className="signupBox" onSubmit={handleSubmit}>
            <input
              placeholder="username"
              type="text"
              className="signupInput"
              name="username"
              {...getFieldProps("username")}
            />
            <input
              placeholder="Email"
              type="email"
              className="signupInput"
              name="email"
              {...getFieldProps("email")}
            />
            {touched.email && errors.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
            {touched.username && errors.username ? (
              <p style={{ color: "red" }}>{errors.username}</p>
            ) : null}
            <input
              placeholder="Password"
              type="password"
              className="signupInput"
              name="password"
              {...getFieldProps("password")}
            
            />
            {touched.password && errors.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
            <input
              placeholder="confirm password"
              type="password"
              className="signupInput"
              name="confirmpass"
              {...getFieldProps("confirmpass")}
            />
            {touched.confirmpass && errors.confirmpass ? (
              <p style={{ color: "red" }}>{errors.username}</p>
            ) : null}
            <button className="signupRegisterBtn">Create a New Account</button>
            <span className="loginSpan">Log In</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
