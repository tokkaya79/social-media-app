import { Link } from "react-router-dom";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import PlaceIcon from "@mui/icons-material/Place";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import "./share.scss";

export default function Share() {
    return (
        <div className="share">
            <div className="share__wrapper">
                <div className="share__top">
                    <Link to="/social-media-app/profile">
                        <img
                            className="share__top-img"
                            src="./assets/person/with_comp_mini.jpg"
                            alt="foto"
                        />
                    </Link>
                    <input
                        className="share__top-input"
                        placeholder="What's in your mind Safak?"
                    />
                </div>
                <hr className="share__hr" />
                <div className="share__bottom">
                    <div className="share__bottom-options">
                        <div className="share__bottom-option">
                            <PermMediaIcon
                                htmlColor="tomato"
                                className="share__bottom-icon"
                            />
                            <span className="share__bottom-text">
                                Photo or Video
                            </span>
                        </div>
                        <div className="share__bottom-option">
                            <LabelIcon
                                htmlColor="blue"
                                className="share__bottom-icon"
                            />
                            <span className="share__bottom-text">Tag</span>
                        </div>
                        <div className="share__bottom-option">
                            <PlaceIcon
                                htmlColor="green"
                                className="share__bottom-icon"
                            />
                            <span className="share__bottom-text">Location</span>
                        </div>
                        <div className="share__bottom-option">
                            <EmojiEmotionsIcon
                                htmlColor="goldenrod"
                                className="share__bottom-icon"
                            />
                            <span className="share__bottom-text">Feelings</span>
                        </div>
                    </div>
                    <button className="share__btm">Share</button>
                </div>
            </div>
        </div>
    );
}
