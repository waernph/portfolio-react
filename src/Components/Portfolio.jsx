import Card from './Card'

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className='Projects'>
                <Card title={"Shotgun"} descripton={"Text här"} imgUrl={""} />
                <Card />
                <Card />
                <Card />
            </div>

        </section>

    )
}
export default Portfolio;