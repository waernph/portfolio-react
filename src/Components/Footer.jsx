function Footer() {
    return (
        <section>
            <ul>
                <li>© Philip Waern {new Date().getFullYear()}</li>
                <li><a href="https://github.com/waernph" target="_blank" aria-label="Link to GitHub"><i
                    class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/philip-w%C3%A6rn/" target="_blank" aria-label="Link to LinkedIn"><i
                        class="fa-brands fa-linkedin"></i></a>
                    <a href="https://unsplash.com/@waern" target="_blank" aria-label="Link to Unsplash"><i
                        class="fa-brands fa-unsplash"></i></a>
                </li>
            </ul>

        </section>
    )
}
export default Footer;