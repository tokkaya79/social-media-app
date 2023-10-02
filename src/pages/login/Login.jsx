import { Link } from "react-router-dom";

import "./login.scss"

export default function Login() {
  return (
    <div className="login">
        <div className="login__wrapper">
            <div className="login__left">
                <h3 className="login__logo">ValushkaBook</h3>
                <span className="login__desc">Connect with friends and the world around you on ValushkaBook</span>
            </div>
            <div className="login__right">
                <div className="login__box">
                    <input className="login__input" placeholder="Email" />
                    <input className="login__input" placeholder="Password" />
                    <Link  className="login__btn" to="/">Log in</Link>
                    <span className="login__forgot">Forgot Password?</span>
                    <Link className="login__register" to="/register">Create a New Account</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
