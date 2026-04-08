import { useState, useEffect } from "react"
let refDict = [
    {
        "name": "Jakob Rockmyr",
        "text": "Philip är en otroligt uppskattad kollega som lyfter hela teamet. Han kombinerar stark teknisk kompetens med ett kreativt tänk som märks i allt han gör.",
        "company": "Owner, BST"
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
            <em className="refText">"{refDict[index].text}"</em>
            <p className="refName">{refDict[index].name}</p>
            <p className="refCompany">{refDict[index].company}</p>
        </section>
    )
}
export default ReferencesText;