import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import "./sidebar.scss";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <RssFeedIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Feed</span>
                    </li>
                    <li className="sidebar__list-item">
                        <ChatIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Chats</span>
                    </li>
                    <li className="sidebar__list-item">
                        <PlayCircleFilledIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Videos</span>
                    </li>
                    <li className="sidebar__list-item">
                        <GroupsIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Groups</span>
                    </li>
                    <li className="sidebar__list-item">
                        <BookmarkIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Bookmarks</span>
                    </li>
                    <li className="sidebar__list-item">
                        <HelpIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Questions</span>
                    </li>
                    <li className="sidebar__list-item">
                        <WorkOutlineIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Jobs</span>
                    </li>
                    <li className="sidebar__list-item">
                        <EventIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Events</span>
                    </li>
                    <li className="sidebar__list-item">
                        <SchoolIcon className="sidebar__list-item--icon" />
                        <span className="sidebar__list-item--text">Courses</span>
                    </li>
                </ul>
                <button className='sidebar__btn'>Show more</button>
                <hr className="sidebar__hr" />
                <ul className="sidebar__friendlist">
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/2.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Jein Doe</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/3.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Mikki Rurk</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/4.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Willa Smeeth</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/5.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Monika Smooth</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/6.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Bred Patison</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/7.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Kaira Natly</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/8.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Dginni Lock</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/9.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Max Bred</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/10.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Lili Brawn</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/2.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Jein Doe</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/3.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Mikki Rurk</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/4.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Willa Smeeth</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/5.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Monika Smooth</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/6.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Bred Patison</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/7.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Kaira Natly</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/8.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Dginni Lock</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/9.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Max Bred</span>
                    </li>
                    <li className="sidebar__friendlist-item">
                        <img className="sidebar__friendlist-item--img" src="./assets/person/10.jpeg" alt="friend-foto" />
                        <span className="sidebar__friendlist-item--name">Lili Brawn</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
