import react, { useEffect, useState } from "react";
import reactDom from "react-dom";
import { useWindowScroll } from "react-use";
import { useTransition, animated } from "react-spring";

const ProgressBar = (props) => {
    const { y: pageYOffset } = useWindowScroll()
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        if (pageYOffset > 400) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }, [pageYOffset])

    var tocState;
    if (props.currentState === 'toc') {
        tocState = { opacity: 1 }
    }
    else {
        tocState = { opacity: .5 }
    }

    var aboutMeState;
    if (props.currentState === 'aboutMe') {
        aboutMeState = { opacity: 1 }
    }
    else {
        aboutMeState = { opacity: .5 }
    }

    var portfolioState;
    if (props.currentState === 'portfolioGallery') {
        portfolioState = { opacity: 1 }
    }
    else {
        portfolioState = { opacity: .5 }
    }

    var contactState;
    if (props.currentState === 'contact') {
        contactState = { opacity: 1 }
    }
    else {
        contactState = { opacity: .5 }
    }

    var competencesState;
    if (props.currentState === 'competences') {
        competencesState = { opacity: 1 }
    }
    else {
        competencesState = { opacity: .5 }
    }

    var pageState;
    if (props.currentState === 'home') {
        pageState = { opacity: 0 }
    }
    else {
        pageState = { opacity: 1 }
    }


    return (
        <div className="progressBar" style={pageState}>
            <div className="vl"></div>

            <ul className="progress">
                <li className="hoverEffect" onClick={props.goToHome}>Home</li>
                <li className="hoverEffect" onClick={props.gotoTOC} style={tocState}>Table of Content</li>
                <li className="hoverEffect" onClick={props.gotoAboutMe} style={aboutMeState}>About Me</li>
                <li className="hoverEffect" onClick={props.gotoCompetences} style={competencesState}>Competences</li>
                <li className="hoverEffect" onClick={props.gotoPortfolio} style={portfolioState}>Portfolio Gallery</li>
                <li className="hoverEffect" onClick={props.gotoContact} style={contactState}>Contact</li>
            </ul>
        </div>
    )
}

export default ProgressBar