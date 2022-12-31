import { Page, Image } from "../Home/stylepage";
import bg from "../../images/newbg.jpg"


function Roadmap(){
    return(
        <Page>
            <div className="back">
                <Image className="cover" at="local" size="cover" w="100%" h="140%" img={bg} />
            </div>
        </Page>
    );
}


export default Roadmap;