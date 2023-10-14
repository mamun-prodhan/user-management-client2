import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
      });
  };

  return (
    <>
      <h1>Users management system</h1>
      <h4>Number of users: {users.length}</h4>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id}: {user.name} : {user.email}
          </p>
        ))}
      </div>

      <div>
        <form onSubmit={handleUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="text" name="email" id="" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </>
  );
}

export default App;
