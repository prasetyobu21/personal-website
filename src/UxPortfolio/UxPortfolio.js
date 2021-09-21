import reactDom from "react-dom";
import react from "react";
// import './UxPortfolio.css';

const UxPortfolio = () => {
    return (
        <div className="flexx">
            <img src="/images/ux_portfolio_accent.png" alt="" className="portfolio-accent" />
            <div className="col10">
                <img className="imageTitle" src="/images/ux_design.png" />
            </div>
            <div className="col90 animatedTitle animatedFadeInUp fadeInUp">
                <div className="col25">
                    <a href="https://www.behance.net/gallery/125051803/WarungKu-UIUX-Design" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/warungku.png" alt="" />
                    </a>
                    <p className="img-title">WarungKu UX Design</p>
                </div>
                <div className="col25">
                    <a href="https://www.behance.net/gallery/123167331/Workey-App-Design" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/workey.png" alt="" />
                    </a>
                    <p className="img-title">Workey UX Design</p>
                </div>
                <div className="col25">
                    <a href="https://www.behance.net/gallery/115770223/Photography-Website-Landing-Page" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/daily-photo.png" alt="" />
                    </a>
                    <p className="img-title">Photography Website Landing Page</p>
                </div>
                {/* <div className="col20">
                    <a href="https://www.behance.net/gallery/105927185/Spotify-iOS-14-Widget-Concept" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/spotify-widget.png" alt="" />
                    </a>
                    <p className="img-title">Spotify iOs Widget Concept</p>
                </div> */}
                <div className="col25">
                    <a href="https://www.behance.net/prasetyobu43be" target="_blank">
                        <div className="image-portfolio-container more-portfolio">
                            <p className="img-title more-text">More on my Behance</p>
                        </div>
                    </a>
                </div>
            </div>
            <a href="/">
                <button className="circlebutton back-button">
                    <div className="back-arrow"></div>
                </button>
            </a>
        </div>
    )
}

export default UxPortfolio