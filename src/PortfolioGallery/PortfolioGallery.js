import react from "react";
import reactDom from "react-dom";
// import './PortfolioGallery.css'

const PortfolioGallery = () => {
    return (
        <div className="flexx">
            <div className="col10">
                <img className="imageTitle" src="/images/portfolio_gallery.png" />
            </div>
            <div className="col90">
                <ul className="main-list">
                    <li><a href="/ux-design">UX DESIGN</a></li>
                    <li><a href="">WEB DEVELOPMENT</a></li>
                    <li><a href="">ANDROID DEVELOPMENT</a></li>
                    <li><a href="/graphic-design">GRAPHIC & LOGO DESIGN</a></li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioGallery