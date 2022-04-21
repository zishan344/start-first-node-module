import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(name, email);

    //post data to server
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <h1>My Own user: {users.length}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            id: {user.id}, Emal{user.email}, name: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
