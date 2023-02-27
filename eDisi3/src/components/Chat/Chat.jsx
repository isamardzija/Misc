import Header from "../Header/Header"
import Chatbox from "../Chatbox/Chatbox"
import SendMessage from "../SendMessage/SendMessage"
import "./chat.css"

export default function Chat() {
    return <main className="chat-container">
        <Chatbox />
        <SendMessage />
    </main>
}