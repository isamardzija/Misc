import { useState } from "react";
// Components
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Header from "./components/Header/Header";
// Stylesheets
import "./app.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [settings, setSettings] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleSettingsClick() {
    setSettings(prev => !prev)
  }
  return (
    <>
      <Header onSettingsClick={handleSettingsClick} />
      {loggedIn ? <Chat /> : <Login onLoginClick={handleLogin} />}

      {settings && <Settings />}
    </>
  );
}
