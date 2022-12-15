import { Page, Section, Image, Right, Feed } from "./stylepage";
import profile from "../../images/profileicon.jpg"
import bg from "../../images/bg.jpg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <Page>
            <div className="back">
                <Image className="cover" at="local" size="cover" w="100%" h="140%" img={bg} />
            </div>

            <div className="sections">
                {/* <<<<<<<< PÁGINA DA ESQUERDA */}
                <Section className="left">
                    <div className="about">
                        <button className="btn">Sobre</button>
                        <div className="content"></div>
                    </div>
                </Section>
                {/* <<<<<<<< PÁGINA DO MEIO >>>>>>>> */}
                <Section className="mid">
                    <div className="profile">
                        <div className="front">
                            <Image className="img" at="local" ml="auto" mr="auto" size="contain" w="300px" h="300px" img={profile} />
                            <div className="info">
                                <p className="name">Jessé Gomes</p>
                                <p className="tag">@jessegomes</p>
                                <p className="categories">Game Developer - Web Design.</p>
                                <div className="socials">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                {/* PÁGINA DA DIREITA >>>>>>>> */}
                <Section className="right">
                    <div className="about">
                        <button className="btn">Sobre</button>
                        <div className="content"></div>
                    </div>
                </Section>
                <Feed className="feed">

                </Feed>
            </div>
        </Page>
    );
}

export default Home;