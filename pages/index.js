import React, { useContext } from "react";

import { Context } from "../context";

import { Router } from "next/router";

import axios from 'axios';

export default function Auth() {
  const { username, secret, setUserName, setSecret } = useContext(Context);

  const router = userRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.lenght === 0 || secret.length === 0) return 

    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-key": '980cead0-5910-46b7-9cf6-1d03f78b48b7'}}
    )
    .then(r => router.push('/chats'))
  }
  return (
  <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth-title">NeverNet Chat AI</div>

        <div className="input-container">
          <input
            placeholder="Email"
            className="text-input"
            onChange={e => setUserName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="pasword"
            placeholder="password"
            className="text-input"
            onChange={e => setSecret(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">
          Login / Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}