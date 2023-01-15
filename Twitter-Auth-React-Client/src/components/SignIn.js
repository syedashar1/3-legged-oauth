import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const startAuth = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/start-auth")
      .then(res => {
        if (res.data.redirectUrl) {
          localStorage.setItem(
            "oauthRequestTokenSecret",
            res.data.oauthRequestTokenSecret
          );
          localStorage.setItem("oauthRequestToken", res.data.oauthRequestToken);
          window.location.href = res.data.redirectUrl;
        }
      })
      .catch(err => {
        setLoading(false);
        alert("auth error", err);
      });
  };
  return (
    <div className="App-header ">
      <h2> Twitter 3 Legged Authentication </h2>
      {loading && <Spinner />}
      {!loading && <button onClick={startAuth}> Sign In With Twitter </button>}
    </div>
  );
}
