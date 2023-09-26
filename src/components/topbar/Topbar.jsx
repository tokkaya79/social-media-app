import './topbar.scss';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar__left">
                    <span className="logo">SocialBar</span>
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
                        <span className="topbar__right__link">Homepage</span>
                        <span className="topbar__right__link">Timeline</span>
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
                    <img
                        className="topbar__right__icons-img"
                        src="/assets/person/1.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
