import { Page, Section, Image, Link, Text } from "./stylepage";
import profile from "../../images/newprofile.jpg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFacebook, faHtml5, faInstagram, faNodeJs, faReact, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <Page>
            <p style={{color: 'white', margin: "auto", width: 'fit-content', padding: '20px'}}>Em Desenvolvimento...</p>
            <Section >
                <div className="s-1">
                    <div className="p-image">
                        <Image className="img" at="local" size="cover" w="100%" h="100%" img={profile} />
                    </div>
                    <div className="r-1">
                        <div className="info">
                            <p className="name">Jessé Gomes</p>
                            {/* <p className="tag">@jessegomes</p> */}
                            <p className="categories">Game Developer - Web Developer.</p>
                        </div>
                        <div className="socials">
                            <a target="_blank" href="https://instagram.com/ojessegomes">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a target="_blank" href="https://www.tiktok.com/@ojessegomes">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a target="_blank" href="https://www.youtube.com/@ojessegomes">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="s-2">
                    <div className="technologies">
                        <p className="i">
                            <FontAwesomeIcon icon={faHtml5} />
                        </p>
                        <p className="i">
                            <FontAwesomeIcon icon={faCss3} />
                        </p>
                        <p className="i">
                            <FontAwesomeIcon icon={faReact} />
                        </p>
                        <p className="i">
                            <FontAwesomeIcon icon={faNodeJs} />
                        </p>

                    </div>
                </div>

                <div className="s-3">
                    <div className="about">
                        <p>Brasileiro e nativo de Minas Gerais, tenho 18 anos e sempre tive interesse em tecnologia, o que me levou a explorar o mundo da programação. Em 2018, comecei a buscar conhecimento sobre programação e acabei me apaixonando pela área.</p>
                    </div>
                </div>

            </Section>



        </Page>
    );
}

export default Home;