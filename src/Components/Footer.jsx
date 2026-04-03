import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUnsplash } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function Footer() {
    return (
        <section>
            <ul className="footerList">
                <li>© Philip Waern {new Date().getFullYear()}</li>
                <li><a href="https://github.com/waernph" rel="noreferrer" target="_blank" aria-label="Link to GitHub"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li><a href="https://www.linkedin.com/in/philip-w%C3%A6rn/" rel="noreferrer" target="_blank" aria-label="Link to LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
                <li><a href="https://unsplash.com/@waern" rel="noreferrer" target="_blank" aria-label="Link to Unsplash"><FontAwesomeIcon icon={faUnsplash} /></a></li>
            </ul>
        </section>
    )
}
export default Footer;