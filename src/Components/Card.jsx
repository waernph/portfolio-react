import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)



function Card({ title, descripton, imgUrl, gitHubUrl, testMeUrl }) {
    return (
        <div className='Card'>
            <h3>{title}</h3>
            <img src={imgUrl} alt="image of project" />
            <p>{descripton}</p>
            <div className='BtnSection'>
                <a href={gitHubUrl}><button>GitHub</button></a>
                <a href={testMeUrl}><button>Try it!</button></a>
            </div>
        </div>
    )
}
export default Card;