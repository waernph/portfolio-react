import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)



function Card({ title, descripton, imgUrl }) {
    return (
        <div className='Card'>
            <h3>{title}</h3>
            <img src={imgUrl} alt="image of project" />
            <p>{descripton}</p>
            <button>GitHub</button>
            <button>Try it!</button>
        </div>
    )
}
export default Card;