import { useState } from "react";

const Characters = (props) => {
    const [detailsData, setDetailsData] = useState("")
    const [eventTarget, setEventTarget] = useState()
    const [toggle, setToggle] = useState(false);
    const {fetchedData, setFetchedData} = props
    const less = "Show more";
    const more = "Show less"

    const showMore = (char, index) => {
        setToggle(!toggle)
        setEventTarget(index)
        setDetailsData(char.details);
    }
    return (
        <div>
            {fetchedData.map((char, index) =>
                <div key={index}>
                    <p>{char.name}</p>
                    {eventTarget === index && toggle && <p>{detailsData}</p>}
                    <button onClick={() => showMore(char, index)}>{eventTarget === index && toggle ? more : less }</button>
                </div>
                )}
        </div>
    )
}

export default Characters