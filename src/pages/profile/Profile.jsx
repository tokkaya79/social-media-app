import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import './profile.scss';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="container">
                <div className="profile">
                    <Sidebar />
                    <div className="profile-right">
                        <div className="profile-right__top">
                            <div className="profile-right__top-cover">
                                <img
                                    className="profile-right__img-cover"
                                    src="assets/post/fon_in.jpg"
                                    alt="coverImg"
                                />
                                <img
                                    className="profile-right__img-user"
                                    src="assets/person/with_comp_mini.jpg"
                                    alt="coverImg"
                                />
                            </div>
                            <div className="profile-right__top-info">
                                <h4 className="profile-right__top-info--name">Valentyna Tokarska</h4>
                                <span className="profile-right__top-info--descr">Hello my Friends!</span>
                            </div>
                        </div>
                        <div className="profile-right__bottom">
                            <Feed />
                            <Rightbar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
