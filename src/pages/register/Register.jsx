import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__left">
                    <h3 className="login__logo">ValushkaBook</h3>
                    <span className="login__desc">
                        Connect with friends and the world around you on
                        ValushkaBook
                    </span>
                </div>
                <div className="login__right">
                    <div className="login__box register-box">
                        <input
                            className="login__input"
                            placeholder="Username"
                        />
                        <input
                            className="login__input"
                            placeholder="Email"
                        />
                        <input
                            className="login__input"
                            placeholder="Password"
                        />
                        <input
                            className="login__input"
                            placeholder="Password Again"
                        />
                        <Link
                            to="/social-media-app"
                            className="login__btn"
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/social-media-app"
                            className="login__register"
                        >
                            Log into Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
