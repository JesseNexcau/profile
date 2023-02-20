import { Page, Section, Image, Link, Text } from "./stylepage";
import profile from "../../images/newprofile.jpg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFacebook, faHtml5, faInstagram, faJs, faNodeJs, faReact, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileCode, faPhone } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
        <Page>
            <p style={{color: 'white', margin: "auto", width: 'fit-content', padding: '20px'}}>Em Desenvolvimento...</p>
            <Section >
                <div id="about">
                    <div className="s">
                        <p>Hello, I Am</p>
                    </div>
                    <div className="s-1">
                        <div className="info">
                            <div className="indentify">
                                <p className="name">Jessé Gomes</p>
                                {/* <p className="tag">@jessegomes</p> */}
                                <p className="categories">Web Developer.</p>
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
                            <div className="contact">
                                <p><FontAwesomeIcon icon={faEnvelope} /> contatoojesse@gmail.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> +55 (31) 98904-2283</p>

                            </div>
                        </div>
                        <div className="p-image">
                            <Image className="img" at="local" size="cover" w="100%" h="100%" img={profile} />
                        </div>
                        
                    </div>
                    <div className="s-3">
                        <div className="about">
                            <p>Brasileiro e nativo de Minas Gerais, tenho 18 anos e sempre tive interesse em tecnologia, o que me levou a explorar o mundo da programação. Em 2018, comecei a buscar conhecimento sobre programação e acabei me apaixonando pela área.</p>
                        </div>
                    </div>

                </div>
                    <div className="skills">
                        <div className="technologies">
                            <div className="techno html">
                                <p className="i">
                                    <FontAwesomeIcon icon={faHtml5} />
                                </p>
                                <p> HTML </p>
                            </div>
                            <div className="techno css">
                                <p className="i">
                                    <FontAwesomeIcon icon={faCss3} />
                                </p>
                                <p> CSS </p>
                            </div>
                            <div className="techno react">
                                <p className="i">
                                    <FontAwesomeIcon icon={faReact} />
                                </p>
                                <p> React </p>
                            </div>
                            <div className="techno node">
                                <p className="i">
                                    <FontAwesomeIcon icon={faNodeJs} />
                                </p>
                                <p> NodeJS </p>
                            </div>
                            <div className="techno js">
                                <p className="i">
                                    <FontAwesomeIcon icon={faJs} />
                                </p>
                                <p> JavaScript </p>
                            </div>
                            <div className="techno tps">
                                <p className="i">
                                    <FontAwesomeIcon icon={faFileCode} />
                                </p>
                                <p> JavaScript </p>
                            </div>


                        </div>
                    </div>

                

            </Section>



        </Page>
    );
}

export default Home;