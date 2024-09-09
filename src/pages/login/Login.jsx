import React, { useContext, useState } from "react";
import "./login.css";
import { CreateContext } from "../../Context/CreateContext";
import Profile from "../profile/Profile";
import Signup from "../signup/Signup";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [auth, setAuth] = useState(false);
  const [emailErr,setEmailError]=useState(false)
  const [passErr,setPassError]=useState(false)
  const context = useContext(CreateContext);

  const handleClick =  () => {
     fetch(
      "https://socaial-media-api.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    ).then(res=>res.json()).then(data=>{
      if(data==='email does not exist'){
        setEmailError(true)
      }else if(data==='wrong password'){
        setEmailError(false)
        setPassError(true)
      }else{
        context.setUser(data)
        console.log(context.User.username)
        setEmailError((emailErr)=>false)
        setPassError((passErr)=>false)
        setAuth(true)
      }
    });
  };
  //console.log(context.User.username,"usedad ")

  return (
    <>
      {auth ? (
        <Profile />
      ) : (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h1 className="logo">Connect</h1>
              <span className="logoDesc">
                Connect with friends around world
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input
                  placeholder="Email"
                  type="email"
                  className="loginInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailErr&&<span className="loginForgot">Email does not exist</span>}
                <input
                  placeholder="Password"
                  type="text"
                  className="loginInput"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                {passErr&&<span className="loginForgot">Please enter valid password</span>}
                <button className="loginBtn" onClick={handleClick}>
                  Log In
                </button>
                <span className="loginForgot">Forgot password?</span>
                <span className="loginForgot" onClick={(e)=>{
                }}>New here? create account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
