import reactDom from "react-dom";
import react from "react";
// import './Contact.css'

const Contact = () => {
    return (
        <div className="flexx">
            <div className="col10">
                <img className="imageTitle" src="/images/contact.png" />
            </div>
            <div className="col90">
                <h2 className="reachMeOut">REACH ME OUT</h2>
                <ul className="center-small-list">
                    <li><a href="mailto: prasetyobu21@gmail.com" target="_blank">Email: prasetyobu21@gmail.com</a></li>
                    <li><a href="https://www.instagram.com/skuttlebutt_/" target="_blank">Instagram: skuttlebutt_</a></li>
                    <li><a href="https://twitter.com/skuttlebutt_" target="_blank">Twitter: @skuttlebutt_</a></li>
                </ul>
                <p className="small-text-contact">And visit my <a href=""><b>GitHub</b></a> and <a href=""><b>Behance</b></a>.</p>
            </div>
        </div >
    )
}

export default Contact