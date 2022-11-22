import useApi from "../../hooks/useApi"
import React, { useEffect, useState } from "react"

const Header = () => {
  const api = useApi()
  const [ user, setUser] = useState (null)


  useEffect(() => {
    const token = localStorage.getItem('token')
    api.get("user/appData")
    .then((response) => {
      console.log("APP DATA RESP",  response)
      setUser(response.data.data.user)
    })
    .catch((err) => {
      console.log("ERR", err)
    })
     }, [])

   const onLogoutBtnClick = () => {
    api.get('auth/logout')
    .then((response) => {
      console.log("LOGOUT_RESP", response)
    })
    .catch((err) => {
      console.log('ERR', err)
    })
    .finally (() => {
      localStorage.removeItem('token')
      window.location.href ='/#'
      setTimeout(() => {
        window.location.reload()
      }, 1111)
    })
   }

    return (
        <div className="">
        <header>
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/#" className="d-flex align-items-center text-dark text-decoration-none">
       
        <span className="fs-4">API-3 Tutorial</span>
      </a>

      { user ? (
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <strong className=" me-3 py-2">
        {user.fullname}
        </strong>
        <button className="btn btn-dark text-warning me-3 py-2"
        onClick={onLogoutBtnClick}>
        Logout
        </button>
        </nav>
      
      ) : ( 
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <a className="btn btn-dark text-warning me-3 py-2" href="#/login">
      LOGIN
      </a>
      <a className="btn btn-dark text-warning me-3 py-2" href="#/Register">
      REGISTER
      </a>
      </nav>

      )}

      
    </div>

    
  </header>
        </div>
    )
}



export default Header