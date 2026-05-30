import { useEffect, useState } from "react";

function Skills() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="page-container">
      <div className="content-card">
      <h1>Skills</h1>
      <p>HTML, CSS, JavaScript, React</p>

      <h2>Users:</h2>
      {users.length > 0 ? (
        users.map(user => <p key={user.id}>{user.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}

export default Skills;

