import { Page, Section, Image } from "./stylepage";
import profile from "../../images/profileicon.jpg"

function Home() {
    return (
        <Page>
            <Section>
                <div className="profile">
                    <Image className="img" ml="auto" mr="auto" size="contain" w="300px" h="300px" img={profile} />
                    <div className="info">
                        <p className="name">Jessé Gomes</p>
                        <p className="tag">@jessegomes</p>
                        <p className="categories">Game Developer - Web Design</p>
                    </div>
                    <div className="about">
                        <button className="btn">Sobre</button>
                        <div className="content"></div>
                    </div>
                </div>
            </Section>
        </Page>
    );
}

export default Home;