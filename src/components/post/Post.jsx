import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./post.scss";

export default function Post() {
    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__top">
                    <div className="post__top-left">
                        <img className="post__top-img" src="./assets/person/2.jpeg" alt="icon" />
                        <span className="post__top-name">Ang Devis</span>
                        <span className="post__top-time">5 mins ago</span>
                    </div>
                    <div className="post__top-right">
                        <MoreVertIcon className="post__top-icon" />
                    </div>
                </div>
                <div className="post__center">
                    <span className="post__center-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quisquam! Rem sapiente excepturi molestias iusto iste, voluptas blanditiis rerum voluptatem at recusandae totam eaque maiores doloremque quidem vel repellendus beatae!</span>
                    <img className="post__center-img" src="./assets/post/1.jpeg" alt="img-post" />
                </div>
                <div className="post__bottom">
                    <div className="post__bottom-left">
                        <img className="post__bottom-icon" src="./assets/like.png" alt="like-ikon" />
                        <img className="post__bottom-icon" src="./assets/heart.png" alt="like-ikon" />
                        <span className="post__bottom-counter">24 people like it</span>
                    </div>
                    <div className="post__bottom-right">
                        <span className="post__bottom-text">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
