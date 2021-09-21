import logo from './logo.svg';
import './App.css';
import "@fontsource/open-sans";
import Navbar from './component/navbar/navbar';
import LandingScreen from './LandingScreen/LandingScreen';
import TOC from './TableOfContent/TOC';
import AboutMe from './AboutMe/AboutMe';
import PortfolioGallery from './PortfolioGallery/PortfolioGallery';
import ProgressBar from './component/ProgressBar/ProgressBar';
import Contact from './Contact/Contact';
import Competences from './Competences/Competences';
import UxPortfolio from './UxPortfolio/UxPortfolio';
import GraphicDesignPortfolio from './GraphicDesignPortfolio/GarphicDesignPortfolio';
import AndroidPortflolio from './AndroidPortfolio/AndroidPortfolio';
import WebDevPortfolio from './WebDevPortfolio/WebDevPortfolio';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from "react-use";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {
  var Scroll = require('react-scroll')
  var scroller = Scroll.scroller
  const { y: pageYOffset } = useWindowScroll()
  const [isVisible, setIsVisible] = useState(false)
  const toc = useRef(null)
  const aboutMe = useRef(null)
  const portfolioGallery = useRef(null)
  const [currentState, setCurrentState] = useState("home")

  //Progress Bar
  function gotoHome() {
    scroller.scrollTo('home', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    setCurrentState("home")
  }

  function gotoTOC() {
    scroller.scrollTo('toc', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    setCurrentState("toc")
  }

  function gotoAboutMe() {
    scroller.scrollTo('aboutMe', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    setCurrentState("aboutMe")
  }

  function gotoPortfolio() {
    scroller.scrollTo('portfolioGallery', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    setCurrentState("portfolioGallery")
  }

  function gotoContact() {
    scroller.scrollTo('contact', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    setCurrentState("contact")
  }

  function gotoCompetences() {
    scroller.scrollTo('competences', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    setCurrentState("competences")
  }

  //Next button
  const nextButton = () => {
    if (currentState === "home") {
      // window.scrollTo({ top: toc.current.offsetTop, behavior: "smooth" })
      scroller.scrollTo('toc', {
        duration: 1500,
        delay: 100,
        smooth: true
      })
      setCurrentState("toc")
    }
    else if (currentState === "toc") {
      scroller.scrollTo('aboutMe', {
        duration: 1500,
        delay: 100,
        smooth: true
      })
      setCurrentState("aboutMe")
    }
    else if (currentState === "aboutMe") {
      scroller.scrollTo('competences', {
        duration: 1500,
        delay: 100,
        smooth: true
      })
      setCurrentState("competences")
    }

    else if (currentState === "competences") {
      scroller.scrollTo('portfolioGallery', {
        duration: 1500,
        delay: 100,
        smooth: true
      })
      setCurrentState("portfolioGallery")
    }

    else if (currentState === "portfolioGallery") {
      scroller.scrollTo('contact', {
        duration: 1500,
        delay: 100,
        smooth: true
      })
      setCurrentState("contact")
    }
  }

  var buttonState;
  if (currentState === 'contact') {
    buttonState = { opacity: 0 }
  }
  else {
    buttonState = { opacity: 1 }
  }

  //Reset state when reload
  const backToTop = () => window.addEventListener("beforeunload", event => {
    window.scrollTo(0, 0)
    setCurrentState("home")
  })
  useEffect(() => {
    backToTop()
    if (pageYOffset > 400) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }
  }, [pageYOffset])


  return (
    <Router>

      <div>
        <Switch>
          <Route exact path="/">

            <button className="circlebutton" onClick={nextButton} style={buttonState}>
              <div className="arrow"></div>
            </button>

            <ProgressBar
              goToHome={gotoHome}
              gotoTOC={gotoTOC}
              gotoAboutMe={gotoAboutMe}
              gotoPortfolio={gotoPortfolio}
              gotoContact={gotoContact}
              gotoCompetences={gotoCompetences}
              currentState={currentState}
            />

            <div name="home">
              <Navbar
                gotoContact={gotoContact}
              />
            </div>

            <LandingScreen />

            <div name="toc" ref={toc}>
              <TOC
                gotoAboutMe={gotoAboutMe}
                gotoPortfolio={gotoPortfolio}
                gotoContact={gotoContact}
                gotoCompetences={gotoCompetences}
              />
            </div>

            <div name="aboutMe" ref={aboutMe}>
              <AboutMe />
            </div>

            <div name="competences">
              <Competences />
            </div>

            <div name="portfolioGallery" ref={portfolioGallery}>
              <PortfolioGallery />
            </div>
            <div name="contact">
              <Contact />
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/ux-design">
            <UxPortfolio />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/web-development">
            <WebDevPortfolio />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/android-development">
            <AndroidPortflolio />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/graphic-design">
            <GraphicDesignPortfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
