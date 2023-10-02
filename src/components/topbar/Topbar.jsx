import { Link } from "react-router-dom";
import "./topbar.scss";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar__left">
                    <Link
                        to="/"
                        className="logo"
                    >
                        ValushkaBook
                    </Link>
                </div>
                <div className="topbar__center">
                    <div className="searchbar">
                        <SearchIcon className="searchbar__icon" />
                        <input
                            className="searchbar__input"
                            placeholder="Search for frend, post or video"
                        />
                    </div>
                </div>
                <div className="topbar__right">
                    <div className="topbar__right__links">
                        <Link
                            to="/"
                            className="topbar__right__link"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="topbar__right__icons">
                        <div className="topbar__right__icons-item">
                            <PersonIcon />
                            <span className="topbar__right__icons-item--badge">
                                1
                            </span>
                        </div>
                        <div className="topbar__right__icons-item">
                            <ChatBubbleIcon />
                            <span className="topbar__right__icons-item--badge">
                                2
                            </span>
                        </div>
                        <div className="topbar__right__icons-item">
                            <NotificationsIcon />
                            <span className="topbar__right__icons-item--badge">
                                1
                            </span>
                        </div>
                    </div>
                    <Link to="/profile">
                        <img
                            className="topbar__right__icons-img"
                            src="/assets/person/with_comp_mini.jpg"
                            alt=""
                        />
                    </Link>
                    <Link to="/login">
                        <ExitToAppIcon className="topbar__right__icons-exit" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
