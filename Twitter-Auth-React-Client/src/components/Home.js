import React, { useState, useEffect } from "react";

export default function Home(props) {
  const [user, setUser] = useState({});
  console.log(props);
  useEffect(() => {
    // if Home page is loaded directly
    if (!props.location.state) {
      alert("an error occured");
      props.history.push("/");
    } else {
      setUser(props.location.state.user);
    }
  }, [props.location.state, props.history]); //equivalent of componentDidMmount lifecycle method

  const logout = () => {
    //   logout function
    setUser({});
    alert("user logged out");
    props.history.push("/");
  };

  return (
    <div className="App-header">
      <img alt={user.name} src={user.photo} />
      <h1>Welcome {user.screen_name}!</h1>
      <button onClick={logout}> Logout </button>
    </div>
  );
}
