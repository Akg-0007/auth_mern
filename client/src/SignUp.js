import { useRef, useState } from "react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosPost } from "../src/Service/AxiosService";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function Signup() {
  const toast = useToast();
  const toastIdRef = useRef();
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
    try {
      const res = await axios.post("http://localhost:5500/auth/signup", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      if (res.data.error)
        toastIdRef.current = toast({
          description: res.data.error,
          status: "error",
        });
      else {
        toastIdRef.current = toast({
          description: "Account created successfully",
          status: "success",
        });
        navigate("/signin");
        // localStorage.setItem("token", res.data.token)
      }
    } catch (err) {
      toastIdRef.current = toast({ description: err.message, status: "error" });
    }
  };

  return (
    <div className="SignIn1">
      <div className="RightSide"></div>
      <div className="LeftSide"></div>
      <div className="Board">Board</div>
      <div className="LoginForm">
        <div className="card-1">
          <div className="email">
            <span>First Name </span>
          </div>
          <div className="input-margin">
            <input
              type="email"
              className="input-email"
              id="emailInput"
              placeholder="Enter your email"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
            />
          </div>

          <div className="email">
            <span>Last Name</span>
          </div>
          <div className="input-margin">
            <input
              type="password"
              className="input-email"
              id="passwordInput"
              placeholder="Enter your password"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />
          </div>
        </div>

        <div className="card-1">
          <div className="email">
            <span>Email Address</span>
          </div>
          <div className="input-margin">
            <input
              type="email"
              className="input-email"
              id="emailInput"
              placeholder="Enter your email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="email">
            <span>Password</span>
          </div>
          <div className="input-margin">
            <input
              type="password"
              className="input-email"
              id="passwordInput"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

         

          <div className="email">
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>

        <div className="dont">
          <span className="span-dont">
            <Link to="/signin">Login here </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
