import {Users} from "../../dateList.js";
import OnlineUsers from "../onlineUsers/OnlineUsers.jsx";

import "./rightbar.scss";

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbar__wrapper">
            <div className="rightbar__birthday">
                <img className="rightbar__birthday-img" src="assets/gift.png" alt="gift" />
                <span className="rightbar__birthday-text"><b>Lola Jain</b> and <b>3 other friends</b> have birthday today</span>
            </div>
            <img className="rightbar__ad" src="assets/ad.png" alt="ad" />
            <h4 className="rightbar__title">Online Friends</h4>
            <ul className="rightbar-friend__list">
                {Users.map(u=>(
                <OnlineUsers key={u.id} user={u}/>))}
            </ul>
        </div>
    </div>
  )
}
