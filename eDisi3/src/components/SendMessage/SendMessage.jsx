import "./sendMessage.css"

export default function SendMessage() {
    return <form className="sendMessageForm" >
        <button className="emojis"><img src="public/icons/emoji-smile-fill.svg" alt="" /></button>
        <input type="text" />
        <button className="send"><img src="public/icons/send.svg"/></button>
    </form>
}