import react from "react";

const WebDevPortfolio = () => {
    return (
        <div className="flexx">
            <div className="col10">
                <img className="imageTitle" src="/images/webdev.png" />
            </div>
            <div className="col90">
                <ul className="main-list">
                    <li><a href="https://github.com/prasetyobu21/forengCI" target="_blank">WIKA Forum Engineering Virtual Event Website</a></li>
                    <li><a href="https://pdki-indonesia.dgip.go.id/detail/EC00201974665?type=copyright" target="_blank">Mental Health Knowledge Management</a></li>
                    <li><a href="https://github.com/prasetyobu21/personal-website" target="_blank">My Personal Website</a></li>
                    <li><a href="https://github.com/prasetyobu21" target="_blank">More</a></li>
                </ul>
            </div>
            <a href="/">
                <button className="circlebutton back-button">
                    <div className="back-arrow"></div>
                </button>
            </a>
        </div>
    )
}

export default WebDevPortfolio