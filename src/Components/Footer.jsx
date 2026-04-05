import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function Footer() {
    return (
        <section className='footerSection'>
            <p className='copyrightInfo'>© Philip Waern {new Date().getFullYear()}</p>
            <div className='footerLogos'>
                <a href="https://www.linkedin.com/in/philip-w%C3%A6rn/" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon className='faIcon' icon="fa-brands fa-linkedin" />
                </a>

                <a href='https://github.com/waernph' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon className='faIcon' icon="fa-brands fa-square-github" />
                </a>

                <a href={"https://unsplash.com/@waern"} target='_blank' rel="noreferrer">
                    <FontAwesomeIcon className='faIcon' icon="fa-brands fa-unsplash" />
                </a>

            </div>
        </section>
    )
}
export default Footer;