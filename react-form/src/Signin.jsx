import { useState } from "react";
import "./Signin.css"

export default function Signin() {
    let [click, setClick] = useState(true);
    return (
        <div className="page">
            <div className="mainpage">

                <div className="buttons p-8">
                    <button className={click ? 'clickcolor' : '' } onClick={() => { setClick(true) }}>Login</button>
                    <button className={!click ? 'clickcolor' : ''} onClick={() => { setClick(false) }}>Signup</button>
                </div>

            {click ? <>
            <div className="logindiv">
               <input type="email" className="email" placeholder="Enter email"/>
               <input type="password" className="email" placeholder="Enter password" />
               
               <button className="loginbutton">Login</button>
               </div>
              <a href="#">Forgot password?</a> 
               <p className="signuptag">Not a member? <a href="#" onClick={()=>{setClick(false)}}>Signup</a></p>
            </>: <>
            <div className="logindiv">
                <input type="text" name="" id="" placeholder="Enter your name" className="email"/>
                <input type="email" name="" id="" placeholder="Enter your email" className="email"/>
                <input type="password" name="" id="" placeholder="Set your password" className="email"/>
                <button className="loginbutton">Signup</button>
            </div>
            </>}
            

            </div>
        </div>
    );
}