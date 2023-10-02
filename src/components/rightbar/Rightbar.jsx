import { Users } from '../../dateList.js';
import OnlineUsers from '../onlineUsers/OnlineUsers.jsx';

import './rightbar.scss';

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="rightbar__birthday">
                    <img
                        className="rightbar__birthday-img"
                        src="assets/gift.png"
                        alt="gift"
                    />
                    <span className="rightbar__birthday-text">
                        <b>Vanushechka Lubimyj</b> and <b>that is all</b> have
                        birthday today
                    </span>
                </div>
                <img
                    className="rightbar__ad"
                    src="assets/ad.png"
                    alt="ad"
                />
                <h4 className="rightbar__title">Online Friends</h4>
                <ul className="rightbar-friend__list">
                    {Users.map((u) => (
                        <OnlineUsers
                            key={u.id}
                            user={u}
                        />
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbar__title">User informaition:</h4>
            <div className="rightbar__info">
                <div className="rightbar__info-item">
                    <span className="rightbar__info-key">City:</span>
                    <span className="rightbar__info-value">Wroclaw</span>
                </div>
                <div className="rightbar__info-item">
                    <span className="rightbar__info-key">From:</span>
                    <span className="rightbar__info-value">Odessa</span>
                </div>
                <div className="rightbar__info-item">
                    <span className="rightbar__info-key">Relationship:</span>
                    <span className="rightbar__info-value">In Love</span>
                </div>
            </div>
            <h4 className="rightbar__title">User friends</h4>
            <div className="rightbar__followings">
                <div className="rightbar__following">
                    <img className="rightbar__following-img" src="assets/person/1.jpeg" alt="foto friend" />
                    <span className="rightbar__following-name">John Karter</span>
                </div>
                 <div className="rightbar__following">
                    <img className="rightbar__following-img" src="assets/person/2.jpeg" alt="foto friend" />
                    <span className="rightbar__following-name">John Karter</span>
                </div>
                 <div className="rightbar__following">
                    <img className="rightbar__following-img" src="assets/person/3.jpeg" alt="foto friend" />
                    <span className="rightbar__following-name">John Karter</span>
                </div>
                 <div className="rightbar__following">
                    <img className="rightbar__following-img" src="assets/person/4.jpeg" alt="foto friend" />
                    <span className="rightbar__following-name">John Karter</span>
                </div>
                 <div className="rightbar__following">
                    <img className="rightbar__following-img" src="assets/person/5.jpeg" alt="foto friend" />
                    <span className="rightbar__following-name">John Karter</span>
                </div>
                 <div className="rightbar__following">
                    <img className="rightbar__following-img" src="assets/person/6.jpeg" alt="foto friend" />
                    <span className="rightbar__following-name">John Karter</span>
                </div>
                
            </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbar__wrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}
