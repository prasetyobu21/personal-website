import reactDom from "react-dom";
import react from "react";
// import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="flexx">
            <div className="col10">
                <img className="imageTitle" src="/images/about_me.png" />
            </div>
            <div className="col90">
                <h2 className="hello">HELLO</h2>
                <p className="aboutMe">
                    My name is Prasetyo Budi Utomo, but you can call me Tyo. I am a UX Designer, Graphic Designer, Web and Android Developer. I take computer science major on my college in Bakrie University, and know I do my thesis for me to graduate from university. I like playing games and watching movies. I like story driven games like Assassins Creed series, which is my favorite title of game, Horizon Zero Dawn, etc. Beside that, I like some competitive FPS games like Valorant, CSGO, and Rainbow Six Siege. Sometimes I livestream on my twitch when I play. Now I focusing on UX design, android, and web development for my career. But isn’t close the other opportunity, such as graphic design or logo design for my side job.
                </p>
            </div>
        </div>
    )
}

export default AboutMe