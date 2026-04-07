import Card from './Card'
import KeyboardImg from '../Media/Graphics/keyboard-case.webp'
import BankAppImg from '../Media/Graphics/Bank_app.webp'
import BrewHub from '../Media/Graphics/brewhub.webp'
import Shotgun from '../Media/Graphics/Shotsgun_img.webp'

import CSharp from '../Media/logos/C_Sharp_Logo_2023_cropped.svg'
import JavaScript from '../Media/logos/Javascript-shield.svg'
import Html5 from '../Media/logos/HTML5_logo_and_wordmark_white.svg'
import SqlServer from '../Media/logos/Microsoft_SQL_Server_2025_icon.svg'
import DotNet from '../Media/logos/Microsoft_.NET_logo.svg'


function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className='Projects'>
                <Card
                    title={"Keybaord"}
                    descripton={"My own project in trying to make a keyboard using HTML, CSS, JavaScript and Web Audio API."}
                    imgUrl={KeyboardImg}
                    logoOne={JavaScript}
                    logoTwo={Html5}
                    gitHubUrl={"https://github.com/waernph/Keyboard"}
                    testMeUrl={"https://keyboard.wrn.se/"} />

                <Card
                    title={"Bank App API"}
                    descripton={"An assignment to build an API for a bank. Some of the techniques used are Entity Framework, Controllers, JWT for authorization and authentication, AutoMapper Swagger"}
                    imgUrl={BankAppImg}
                    logoOne={CSharp}
                    logoTwo={DotNet}
                    logoThree={SqlServer}
                    gitHubUrl={'https://github.com/waernph/BankOfWaern.git'}
                    testMeUrl={''} />

                <Card
                    title={"BrewHub API"}
                    descripton={'An assignment to build an API for a forum. Some of the techiques used are Entity Framework, Controllers, JWT for autharization and authentication, AutoMapper Swagger'}
                    imgUrl={BrewHub}
                    logoOne={CSharp}
                    logoTwo={DotNet}
                    logoThree={SqlServer}
                    gitHubUrl={'https://github.com/waernph/BrewHub.git'}
                    testMeUrl={''} />

                <Card
                    title={"Shotgun"}
                    descripton={'A console game developed as an examination project during the course C#/.NET Basics'}
                    imgUrl={Shotgun}
                    logoOne={CSharp}
                    gitHubUrl={'https://github.com/waernph/shotgun3.git'}
                    testMeUrl={''} />

            </div>

        </section>

    )
}
export default Portfolio;