import "./chatbox.css"
import Message from "./Message/Message"

const message1 = "e, disi?"
const message2 = "mislio sam da se sutra nađemo oko 18h da riješimo onaj bug"
const message3 = "možemo, taman mi paše tada"
const message4 = "ok, vidimo se onda"
const message5 = "dogovoreno"
const message6 = "pozvat cu i matka, svakako ga trebamo oko onog drugog projekta nesto upitait"
const message7 = "e da, dobra ideja"
export default function Chatbox() {
    return <>
    <div className="chatbox">
        <Message>{message1}</Message>
        <Message>{message2}</Message>
        <Message>{message3}</Message>
        <Message>{message4}</Message>
        <Message>{message5}</Message>
        <Message>{message6}</Message>
        <Message>{message7}</Message>
    </div>
    </>
}