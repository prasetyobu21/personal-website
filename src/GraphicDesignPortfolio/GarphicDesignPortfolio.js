import reactDom from "react-dom";
import react from "react";

const GraphicDesignPortfolio = () => {
    return (
        <div className="flexx">
            <img src="/images/graphic_design_accent.png" alt="" className="portfolio-accent" />
            <div className="col10">
                <img className="imageTitle" src="/images/graphic_design.png" />
            </div>
            <div className="col90 animatedTitle animatedFadeInUp fadeInUp">
                <div className="col20">
                    <a href="https://www.behance.net/gallery/110288423/Turntable" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/turntable.png" alt="" />
                    </a>
                    <p className="img-title">3D Turntable Design</p>
                </div>
                <div className="col20">
                    <a href="https://dribbble.com/shots/16276949-P-Letter-Logo" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/p-logo.jpg" alt="" />
                    </a>
                    <p className="img-title">P Letter Logo</p>
                </div>
                <div className="col20">
                    <a href="https://www.behance.net/gallery/94926805/Slow-Hand" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/hand-artwork.png" alt="" />
                    </a>
                    <p className="img-title">Hand Artwork</p>
                </div>
                <div className="col20">
                    <a href="https://www.behance.net/gallery/94926583/Animal-Care-Logo" target="_blank">
                        <img className="image-portfolio-container" src="/images/portfolio/animal-care.jpg" alt="" />
                    </a>
                    <p className="img-title">Animal Care Logo</p>
                </div>
                <div className="col20">
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

export default GraphicDesignPortfolio