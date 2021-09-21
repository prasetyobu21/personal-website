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
                    <li><a href="httphttps://www.linkedin.com/in/prasetyo-budi-utomo-b54138172/s://twitter.com/skuttlebutt_" target="_blank">Twitter: @skuttlebutt_</a></li>
                    <li><a href="https://www.linkedin.com/in/prasetyo-budi-utomo-b54138172/" target="_blank">LinkedIn: Prasetyo Budi Utomo</a></li>
                </ul>
                <p className="small-text-contact">And visit my <a href="https://github.com/prasetyobu21" target="_blank"><b>GitHub</b></a> and <a href="https://www.behance.net/prasetyobu43be" target="_blank"><b>Behance</b></a>.</p>
            </div>
        </div >
    )
}

export default Contact