import "./user.scss"
export default function User({user}) {
    return (
        <li className="sidebar__friendlist-item">
            <img className="sidebar__friendlist-item--img" src={user.userImg} alt="friend-foto" />
            <span className="sidebar__friendlist-item--name">{user.userName}</span>
        </li>
    )
}
