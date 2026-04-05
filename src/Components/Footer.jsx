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
        <section className='footerSection'>
            <p className='copyrightInfo'>© Philip Waern {new Date().getFullYear()}</p>
            <div className='footerLogos'>
                <a href="https://www.linkedin.com/in/philip-w%C3%A6rn/" target='_blank'>
                    <FontAwesomeIcon className='faIcon' icon="fa-brands fa-linkedin" />
                </a>

                <a href='https://github.com/waernph' target='_blank'>
                    <FontAwesomeIcon className='faIcon' icon="fa-brands fa-square-github" />
                </a>

                <a href={"https://unsplash.com/@waern"} target='_blank'>
                    <FontAwesomeIcon className='faIcon' icon="fa-brands fa-unsplash" />
                </a>

            </div>
        </section>
    )
}
export default Footer;