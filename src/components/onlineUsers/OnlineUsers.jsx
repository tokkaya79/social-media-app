import "./onlineUsers.scss"

export default function OnlineUsers({ user }) {
    return (
        <>
            <li className="rightbar-friend__item">
                <div className="rightbar-friend__img-box">
                    <img className="rightbar-friend__img" src={user.userImg} alt="person" />
                    <span className="rightbar-friend__online"></span>
                </div>
                <span className="rightbar-friend__name">{user.userName}</span>
            </li>
        </>
    )
}
