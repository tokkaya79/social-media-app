import MoreVertIcon from '@mui/icons-material/MoreVert';

import {Users} from "../../dateList.js";

import "./post.scss";

export default function Post({post}) {
   
    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__top">
                    <div className="post__top-left">
                        <img className="post__top-img" src={Users.filter((u)=> u.id === post.userId)[0].userImg} alt="icon" />
                        <span className="post__top-name">{Users.filter((u)=> u.id === post.userId)[0].userName}</span>
                        <span className="post__top-time">{post.date}</span>
                    </div>
                    <div className="post__top-right">
                        <MoreVertIcon className="post__top-icon" />
                    </div>
                </div>
                <div className="post__center">
                    <span className="post__center-text">{post.desc}</span>
                    <img className="post__center-img" src={post.photo} alt="img-post" />
                </div>
                <div className="post__bottom">
                    <div className="post__bottom-left">
                        <img className="post__bottom-icon" src="./assets/like.png" alt="like-ikon" />
                        <img className="post__bottom-icon" src="./assets/heart.png" alt="like-ikon" />
                        <span className="post__bottom-counter">{post.like} people like it</span>
                    </div>
                    <div className="post__bottom-right">
                        <span className="post__bottom-text">{post.coment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
