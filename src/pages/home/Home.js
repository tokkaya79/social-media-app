import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import "./home.scss";

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="home__container">
                <Sidebar />
                <Feed />
                <Rightbar />

            </div>
        </>
    )
}
