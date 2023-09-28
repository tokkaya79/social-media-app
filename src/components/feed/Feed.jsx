import Post from "../post/Post";
import Share from "../share/Share";

import {Posts} from "../../dateList.js";

import "./feed.scss";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__wrapper">
                <Share />
                {Posts.map(p =>(
                   <Post key={p.id} post={p} /> 
                ))}
            </div>
        </div>
    )
}
