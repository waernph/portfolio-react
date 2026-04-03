import { useState, useEffect } from "react"
let refDict = [
    {
        "name": "Jakob Rockmyr",
        "text": "Philip är en otroligt uppskattad kollega som lyfter hela teamet. Han kombinerar stark teknisk kompetens med ett kreativt tänk som märks i allt han gör.",
        "company": "Owner, BST"
    },
    {
        "name": "Jenny Spetz",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo, voluptatem eligendi quia rem minima laudantium esse suscipit quod aut.",
        "company": "Art Director, Liseberg"
    },
    {
        "name": "Mattias Fredriksson",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo, voluptatem eligendi quia rem minima laudantium esse suscipit quod aut.",
        "company": "Creative Director, Maverick"
    }
]

function ReferencesText() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(prev => (prev + 1) % refDict.length)
        }, 5000)

        return () => clearInterval(id)
    }, [])


    return (
        <section>
            <h3>{refDict[index].text}</h3>
            <p>{refDict[index].name}</p>
            <p>{refDict[index].company}</p>
        </section>
    )
}
export default ReferencesText;