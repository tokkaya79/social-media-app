import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import {Users} from "../../dateList.js";
import User from '../user/User.jsx';


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
                    {Users.map(user => (
                       <User key={user.id} user={user}/> 
                    ))}
                </ul>
            </div>
        </div>
    )
}
