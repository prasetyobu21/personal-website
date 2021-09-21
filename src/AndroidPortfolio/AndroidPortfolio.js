import reactDom from "react-dom";
import react from "react";

const AndroidPortflolio = () => {
    return (
        <div className="flexx">
            <div className="col10">
                <img className="imageTitle" src="/images/android.png" />
            </div>
            <div className="col90">
                <ul className="main-list">
                    <li><a href="https://github.com/prasetyobu21/PomoTimer_Android" target="_blank">Pomodoro Timer</a></li>
                    <li><a href="https://github.com/prasetyobu21/StockComparisonApp" target="_blank">Stock Comparison App Frontend</a></li>
                    <li><a href="https://github.com/Skidi-2021/Skidi-Android" target="_blank">Skin Disease Detector</a></li>
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

export default AndroidPortflolio