import React, {useState} from "react";

const App = () => {
  const [state, setState] = useState([])

  const getRequest = () => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setState(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const renderStateInfo = () => {
    if (state.constructor !== Array) return;
    
    return (
      <ul>
        {state.map(user => (
          <li key={user.id}>{user.last_name}, {user.first_name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <header>
        header
      </header>
      <button onClick={getRequest}>Load sample API</button>
      <div>
        {renderStateInfo()}
      </div>
    </div>
  );
}

export default App;
