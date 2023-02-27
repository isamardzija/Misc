import "./header.css"

export default function Header(props) {
    return <header>
    <h1 className="logo">eDisi</h1>
    <button type="button" onClick={props.onSettingsClick}><img src="public\icons\gear.svg" alt="" /></button>
    </header>
}