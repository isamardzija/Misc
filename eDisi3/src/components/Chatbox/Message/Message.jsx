import "./message.css"

export default function Message(props) {
    return <div className="message">
        <span className="text">{props.children}</span>
    </div>
}