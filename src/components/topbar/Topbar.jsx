import "./topbar.scss";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">
                    SocialBar
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchbar__icon" />
                    <input className="searchbar__input" placeholder="Search for frend, post or video" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarRight__links">
                    <span className="topbarRight__link">Homepage</span>
                    <span className="topbarRight__link">Timeline</span>
                </div>
                <div className="topbarRight__icons">
                    <div className="topbarRight__icons-item">
                        <PersonIcon />
                        <span className="topbarRight__icons-item--badge">
                            1
                        </span>
                    </div>
                    <div className="topbarRight__icons-item">
                        <ChatBubbleIcon />
                        <span className="topbarRight__icons-item--badge">
                            2
                        </span>
                    </div>
                    <div className="topbarRight__icons-item">
                        <NotificationsIcon />
                        <span className="topbarRight__icons-item--badge">
                            1
                        </span>
                    </div>
                </div>
                <img className="topbarRight__icons-img" src="/assets/person/1.jpeg" alt="" />
            </div>
        </div>
    )
}
