import "./login.css";

export default function Login({ onLoginClick }) {
  return (
    <main className="login-container">
      <h1>eDisi</h1>
      <div className="avatars-container">
        <img src="public\avatars\avatar-svgrepo-com(1).svg" alt="" />
        <img src="public\avatars\avatar-svgrepo-com.svg" alt="" />
      </div>
      <form className="user">
        <input type="text" name="username" id="usernameInput" />
        <div>
            <input type="color" name="color" id="colorInput" />
            <button type="button">
              <img src="public\icons\arrow-repeat.svg" alt="" />
            </button>
        </div>
        <button onClick={onLoginClick}>Connect</button>
      </form>
    </main>
  );
}
