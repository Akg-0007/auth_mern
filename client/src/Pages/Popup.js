import { useRef, useState } from "react";
// import "../Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Popup = () => {
    const toast = useToast();
    const toastIdRef = useRef();
    const navigate = useNavigate();
  
    const [data, setData] = useState({
      Product: "",
      Category: "",
      Price: "",
      Brand: "",
    });
  
    const handleSignUp = async () => {
      try {
        const res = await axios.post("http://localhost:5500/auth/createpost/product", data, {
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
            description: "PRODUCT ADDED SUCCESSFULLY",
            status: "success",
          });
          navigate("/shop");
          // localStorage.setItem("token", res.data.token)
        }
      } catch (err) {
        toastIdRef.current = toast({ description: err.message, status: "error" });
      }
    };

    

  return (
    <div className="system">
      <div className="notification">
      <div>
    
    <div className="email">
           <span>Product Name </span>
         </div>
         <div className="input-margin">
           <input
             type="text"
             className="input-email"
             id="emailInput"
             placeholder="Enter your text"
             value={data.Product}
             onChange={(e) => setData({ ...data, Product: e.target.value })}
           />
         </div>

         <div className="email">
           <span>Category </span>
         </div>
         <div className="input-margin">
           <input
             type="text"
             className="input-email"
             id="passwordInput"
             placeholder="Enter your text"
             value={data.Category}
             onChange={(e) => setData({ ...data, Category: e.target.value })}
           />
         </div>

      
         <div className="email">
           <span>Price</span>
         </div>
         <div className="input-margin">
           <input
             type="text"
             className="input-email"
             id="emailInput"
             placeholder="Enter your text"
             value={data.Price}
             onChange={(e) => setData({ ...data, Price: e.target.value })}
           />
         </div>

         <div className="email">
           <span>Brand</span>
         </div>
         <div className="input-margin">
           <input
             type="text"
             className="input-email"
             id="passwordInput"
             placeholder="Enter your text"
             value={data.Brand}
             onChange={(e) => setData({ ...data, Brand: e.target.value })}
           />
         </div>

        

         <div className="email">
           <button onClick={handleSignUp}>Sign Up</button>
         </div>
       

       <div className="dont">
         <span className="span-dont" onClick={()=>navigate('/post')}>
           Home Page  
         </span>
   </div>
    </div>
      
      </div>
    </div>
 
  );
};

export default Popup;