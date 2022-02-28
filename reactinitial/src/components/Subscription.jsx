import axios from "axios"
import { useEffect, useState } from "react"

const Subscription = (props) => {
    const [emailText, setEmailText] = useState("")
    const [res, setRes] = useState(0)
    const {resStatus, setResStatus, subState, setSubState} = props


    const subscribe = async (e) => {
        e.preventDefault()
        const newMail = {email: emailText}
        const response = await axios.post('https://seriescharacters.com/api/newsletter', {newMail});
        const status = response.status
        setRes(status);
        if (status === 201) {
            alert('Subscribed')
        }
        if (status !== 201) {
            setSubState(true)
        }
        if (!status) {
            alert('oops nemjó')
            
        }
        setSubState(false)

    }


    return (
       <form>
           <h1>Subscribe</h1>
           <input type="email" value={emailText} placeholder="enter your email" onChange={(e)=> setEmailText(e.target.value)} required/>
           <button onClick={(e)=> subscribe(e)}>Submit</button>
       </form>
    )
}
export default Subscription