import Profilepic from "../Media/Profilepic.webm"

function AboutMe() {
    return (
        <section id="about-me">
            <h2>About me</h2>
            <div className="About-me-content">
                <video className="Video" autoPlay muted loop playsInline>
                    <source src={Profilepic} />
                </video>
                <article className="about-me-text">
                    <p id="about-me-text-1">
                        I'm Philip Waern, a Backend Developer student at Jensen YH with a focus on cloud technologies.
                    </p>
                    <p id="about-me-text-2">
                        I have 15 years of experience in video production and photography. Over the years I've been
                        used to think creative when solving all kinds of problem, both in editing and in set. That creative approach
                        of solving problems is something i'm bringin in to my new carreer as a developer.
                    </p>
                    <p id="about-me-text-3">
                        Today, I'm bringing that same curiosity, creativity, and analytical thinking into software development. My
                        goal is to become a professional backend developer, building scalable and reliable cloud-based solutions
                        while continuously growing as a developer.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default AboutMe;