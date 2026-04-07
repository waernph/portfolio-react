import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)



function Card({ title, descripton, imgUrl, gitHubUrl, testMeUrl, logoOne, logoTwo, logoThree }) {
    return (
        <div className='CardContainer'>
            <div className='Card'>
                <div className='projectLogoSection'>
                    <img className='projectImage' src={imgUrl} alt="image of project" />
                    <div className='projectLogosList'>
                        <img className='projectLogos' src={logoOne} alt="" />
                        <img className='projectLogos' src={logoTwo} alt="" />
                        <img className='projectLogos' src={logoThree} alt="" />
                    </div>

                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{descripton}</p>
                </div>

            </div>
            <div className='BtnSection'>
                <a href={gitHubUrl} target='_blank'><button>GitHub</button></a>
                <a href={testMeUrl} target='_blank'><button>Try it!</button></a>
            </div>
        </div>
    )
}
export default Card;