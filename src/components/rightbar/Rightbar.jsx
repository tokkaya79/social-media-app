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
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/3.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Jein Nilson</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/5.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Mila Week</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/6.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Siu Hek</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/8.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Maria Bolk</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/9.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Max Iven</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/7.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Lou Jonson</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/5.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Melany Grifit</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/2.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Sam Ronin</span>
                </li>
                <li className="rightbar-friend__item">
                    <div className="rightbar-friend__img-box">
                        <img className="rightbar-friend__img" src="assets/person/4.jpeg" alt="person" />
                        <span className="rightbar-friend__online"></span> 
                    </div>
                    <span className="rightbar-friend__name">Filipp Green</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
