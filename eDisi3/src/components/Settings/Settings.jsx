import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="setting darkMode">
        <span className="settingTitle">Dark Mode</span>
        <button type="button">
          <img src="public/icons/toggle-on.svg" />
        </button>
        <span className="settingDescription">Dark Mode ON</span>
      </div>
      <div className="setting fontSize">
        <span className="settingTitle">Font Size</span>
        <input
          type="range"
          name="fontSize"
          id="fontSize"
          min={16}
          max={28}
          value={16}
        />
        <span className="settingDescription">16</span>
      </div>
      <div className="setting messageSounds">
      <span className="settingTitle">New Message Sound</span>
        <button type="button">
          <img src="public/icons/toggle-on.svg" />
        </button>
        <span className="settingDescription">Sounds ON</span>
      </div>
      <div className="setting disconnect">
        <span className="settingTitle">Disconnect</span>
        <button type="button" className="disconnect">I'm out</button>
      </div>
    </div>
  );
}
