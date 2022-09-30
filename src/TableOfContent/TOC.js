import reactDom from "react-dom";
import React from "react";
// import './TOC.css'

const TOC = (props) => {
  return (
    <div className="flexx">
      <div className="col10">
        <img className="imageTitle" src="/images/table_of_content.png" />
      </div>
      <div className="col90">
        <ul className="main-list">
          <li>
            <a onClick={props.gotoAboutMe}>ABOUT ME</a>
          </li>
          {/* <li><a onClick={props.gotoCompetences}>COMPETENCES</a></li> */}
          <li>
            <a onClick={props.gotoPortfolio}>PORTFOLIO GALLERY</a>
          </li>
          <li>
            <a onClick={props.gotoContact}>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOC;
