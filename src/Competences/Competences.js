import reactDom from "react-dom";
import react from "react";
import './Competences.css'

const Competences = () => {
    return (
        <div className="flexx">
            <div className="col10">
                <img className="imageTitle" src="/images/competences.png" />
            </div>
            <div className="col90 competences-container">
                <div className="col25 competences-icon">
                    <img src="/images/kotlin.png" alt="" className="competences-image" />
                    <p className="competences-title">Android Development (Kotlin)</p>

                    <img src="/images/react.png" alt="" style={{ marginTop: "15vh" }} className="competences-image" />
                    <p className="competences-title">React Js</p>
                </div>

                <div className="col25 competences-icon">
                    <img src="/images/nodejs.png" alt="" className="competences-image" />
                    <p className="competences-title">Node.js</p>

                    <img src="/images/sass.png" alt="" style={{ marginTop: "15vh" }} className="competences-image" />
                    <p className="competences-title">Sass</p>
                </div>

                <div className="col25 competences-icon">
                    <img src="/images/codeigniter.png" alt="" className="competences-image" />
                    <p className="competences-title">Codeigniter</p>

                    <img src="/images/php.png" alt="" style={{ marginTop: "15vh" }} className="competences-image" />
                    <p className="competences-title">PHP</p>
                </div>

                <div className="col25 competences-icon">
                    <img src="/images/figma.png" alt="" className="competences-image" />
                    <p className="competences-title">UX Design</p>

                    <img src="/images/parkin.png" alt="" style={{ marginTop: "15vh" }} className="competences-image" />
                    <p className="competences-title">Logo & Graphic Design</p>
                </div>
            </div>
        </div>
    )
}

export default Competences