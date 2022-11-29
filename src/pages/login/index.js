import React from "react";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { useDispatch } from "react-redux";


const Login = () => {
    const api = useApi

    const dispatch = useDispatch()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   
    const onLoginBtnClick = () => {
   
    const postData = {
        email, password,
    }

    console.log("POST DATA", postData)

    api.post("auth/login", postData)
       .then((response) => {
        console.log("RES", response)
        console.log("TOKEN:", response.data.data.token
         )
        if (response.data.satatus === "success") {
            localStorage.setItem("token", response.data.data.token)
            window.location.href = "/#"

            setTimeout(() => {
                window.location.reloand()
            }, 111)
        } else {
            alert("Hatali e-mail veya sifre girildi")
        }
       } )
       .catch((err) => {
        console.log("ERR", err)
        alert(err.response.data.errorMessage)
       })
    }
    return (


        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col-6 aligin-text-center">

                <form>
                    <div className="form-label">
                        <label htmlFor="email"
                        style={{fontSize:"20px", fontWeight: "bold"}}>
                        Email address
                        </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group"
                        style={{fontSize:"20px", fontWeight: "bold"}}>
                        <label htmlFor="password">
                        Password
                        </label>
                        <input type="password" 
                        className="form-control " 
                        placeholder="Password" 
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <button type="submit" 
                    className="btn btn-dark text-warning my-2 w-100"
                    onClick={onLoginBtnClick}>
                    Login
                    </button>
                </form>

            </div>

        </div>






    )
}

export default Login