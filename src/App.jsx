import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
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
    </>
  );
}

export default App;
