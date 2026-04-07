import Card from './Card'

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className='Projects'>
                <Card title={"Keybaord"} descripton={"My own project in trying to make a keyboard using HTML, CSS, JavaScript and Web Audio API."} imgUrl={""} gitHubUrl={"www.github.com"} testMeUrl={"wrn.se"} />
                <Card />
                <Card />
                <Card />
            </div>

        </section>

    )
}
export default Portfolio;